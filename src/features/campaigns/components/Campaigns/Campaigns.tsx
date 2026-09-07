import { useState, useEffect } from 'react'
import './Campaigns.css'
import { campaignsText } from './Campaigns.langs'
import { useText } from '@/features/langs/hooks/useText'
import {
  CampaignAdd,
  CampaignCard,
  CampaignFilters,
  CampaignInvitations,
  CampaignsSkeleton,
  CampaignError,
} from './components'
import { useGetMyCampaigns } from '../../hooks/useGetMyCampaigns'
import { Button } from '@/shared/ui/Button/Button'
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'

type FilterType = 'active' | 'owned' | 'favorites'
type SortType = 'alphabetical' | 'creation'
type AlphabeticalSortDirection = 'inactive' | 'asc' | 'desc'
type CreationSortDirection = 'asc' | 'desc'

type SortState = {
  alphabetical: AlphabeticalSortDirection
  creation: CreationSortDirection
}

export const Campaigns = () => {
  const text = useText(campaignsText)
  const { data: myCampaigns, isLoading, isError, refetch } = useGetMyCampaigns()

  const [isTimedOut, setIsTimedOut] = useState(false)

  useEffect(() => {
    if (!isLoading) return

    const timer = setTimeout(() => {
      if (isLoading) {
        setIsTimedOut(true)
      }
    }, 10000) // 10 segundos de espera sino mensaje de error

    return () => clearTimeout(timer)
  }, [isLoading])

  const handleRetry = () => {
    setIsTimedOut(false)
    refetch()
  }

  const [filters, setFilters] = useState({
    active: false,
    owned: false,
    favorites: false,
  })

  const [sort, setSort] = useState<SortState>({
    alphabetical: 'inactive',
    creation: 'desc',
  })

  const handleChangeFilter = (filter: FilterType) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }))
  }

  const alphabeticalCycle: AlphabeticalSortDirection[] = [
    'inactive',
    'asc',
    'desc',
  ]

  const handleChangeSort = (sortType: SortType) => {
    setSort(prevSort => {
      if (sortType === 'alphabetical') {
        const current = prevSort.alphabetical
        const currentIndex = alphabeticalCycle.indexOf(current)
        const nextValue =
          alphabeticalCycle[(currentIndex + 1) % alphabeticalCycle.length]

        return {
          alphabetical: nextValue,
          creation: 'desc',
        }
      }

      return {
        alphabetical: 'inactive',
        creation: prevSort.creation === 'asc' ? 'desc' : 'asc',
      }
    })
  }

  const filteredCampaigns = [...(myCampaigns ?? [])]
    .filter(campaign => {
      const matchesOwned = !filters.owned || campaign.isGameMaster
      const matchesFavorites = !filters.favorites

      return matchesOwned && matchesFavorites
    })
    .sort((a, b) => {
      if (sort.alphabetical !== 'inactive') {
        const result = a.name.localeCompare(b.name)
        return sort.alphabetical === 'asc' ? result : -result
      }

      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()
      return sort.creation === 'asc' ? dateA - dateB : dateB - dateA
    })

  if (isLoading && !isTimedOut) {
    //if (isLoading || !isLoading) {
    return <CampaignsSkeleton />
  }

  if (isError || isTimedOut) {
    return (
      <CampaignError
        errorMessage={text.error()}
        errorDescription={text.errorDesc()}
        retryText={text.retry()}
        onRetry={handleRetry}
      />
    )
  }

  return (
    <div className="cmp-campaigns">
      <div className="campaigns-header">
        <div className="campaigns-header-content">
          <h1 className="campaigns-title">{text.activeCampaigns()}</h1>
          <p className="campaigns-subtitle">{text.subtitle()}</p>
        </div>
        <Dropdown
          opener={popoverTarget => (
            <Button
              handlingClass="invitations-button"
              icon="fa-solid fa-envelope"
              theme="secondary"
              htmlAttrs={{ popoverTarget }}
            />
          )}
        >
          <CampaignInvitations />
        </Dropdown>
      </div>

      <CampaignFilters
        filters={filters}
        sort={sort}
        handleChangeFilter={handleChangeFilter}
        handleChangeSort={handleChangeSort}
      />

      <div className="campaigns-list">
        <CampaignAdd />
        {filteredCampaigns?.map(campaign => (
          <CampaignCard
            key={campaign.campaignId}
            campaign={campaign}
            imageUrl="/placeholder_campaign.jpg"
            avatarUrl="./avatar.png"
          />
        ))}
      </div>
    </div>
  )
}
