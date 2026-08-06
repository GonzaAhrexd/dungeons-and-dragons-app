import { useState } from 'react'
import './Campaigns.css'
import { campaignsText } from './Campaigns.langs'
import { useText } from '@/features/langs/hooks/useText'
import { CampaignAdd, CampaignCard, CampaignFilters } from './components'
import { useGetMyCampaigns } from '../../hooks/useGetMyCampaigns'

type FilterType = 'active' | 'recent' | 'favorites'
type SortType = 'alphabetical' | 'creation'

export const Campaigns = () => {
  const text = useText(campaignsText)
  const [activeFilter, setActiveFilter] = useState<FilterType | null>(null)
  const [sortBy, setSortBy] = useState<SortType>('creation')
  const [isAlphabeticalAsc, setIsAlphabeticalAsc] = useState(true)
  const [isCreationAsc, setIsCreationAsc] = useState(true)

  const { data: myCampaigns, isLoading, isError } = useGetMyCampaigns()

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(prev => (prev === filter ? null : filter))
  }

  if (isLoading) {
    return <div className="loading-state">Loading...</div>
  }

  if (isError) {
    return <div className="error-state">Error loading campaigns.</div>
  }

  return (
    <div className="cmp-campaigns">
      <div className="campaigns-header">
        <h1 className="campaigns-title">{text.activeCampaigns()}</h1>
        <p className="campaigns-subtitle">{text.subtitle()}</p>
      </div>

      <CampaignFilters
        activeFilter={activeFilter}
        onFilterChange={handleFilterClick}
        sortBy={sortBy}
        onSortChange={setSortBy}
        isAlphabeticalAsc={isAlphabeticalAsc}
        onToggleAlphabeticalAsc={() => setIsAlphabeticalAsc(prev => !prev)}
        isCreationAsc={isCreationAsc}
        onToggleCreationAsc={() => setIsCreationAsc(prev => !prev)}
      />


      <div className="campaigns-list">
        <CampaignAdd />
        {myCampaigns?.map(campaign => (
          <CampaignCard
            key={campaign.campaignId}
            title={campaign.name}
            description={campaign.description}
            character={campaign.isGameMaster ? 'Game Master' : 'Player'}
            imageUrl="/placeholder_campaign.jpg"
            avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xS4junhykLR37kcvFPxEcT__FSdtsoYwQ6rv5KS00F-xesC8u4093g&s=10"
          />
        ))}
      </div>
    </div>
  )
}

