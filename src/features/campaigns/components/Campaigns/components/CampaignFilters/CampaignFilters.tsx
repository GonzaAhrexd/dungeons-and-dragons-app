import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { campaignsText } from '../../Campaigns.langs'
import './CampaignFilters.css'

export type FilterType = 'active' | 'owned' | 'favorites'
export type SortType = 'alphabetical' | 'creation'
type AlphabeticalSortDirection = 'inactive' | 'asc' | 'desc'
type CreationSortDirection = 'asc' | 'desc'

interface CampaignFiltersProps {
  filters: {
    active: boolean
    owned: boolean
    favorites: boolean
  }
  sort: {
    alphabetical: AlphabeticalSortDirection
    creation: CreationSortDirection
  }
  handleChangeFilter: (filter: FilterType) => void
  handleChangeSort: (sort: SortType) => void
}

export const CampaignFilters = ({
  filters,
  sort,
  handleChangeFilter,
  handleChangeSort,
}: CampaignFiltersProps) => {
  const text = useText(campaignsText)

  const getSortIcon = (direction: AlphabeticalSortDirection | CreationSortDirection) => {
    if (direction === 'asc') return 'fa-solid fa-arrow-up'
    return 'fa-solid fa-arrow-down'
  }

  return (
    <div className="campaigns-filters">
      <div className="filters-capsule">
        <div className="filter-group">
          <button
            className={`filter-tab ${filters.active ? 'active' : ''}`}
            onClick={() => handleChangeFilter('active')}
          >
            {text.filterActive()}
          </button>
          <button
            className={`filter-tab ${filters.owned ? 'active' : ''}`}
            onClick={() => handleChangeFilter('owned')}
          >
            {text.filterOwned()}
          </button>
          <button
            className={`filter-tab ${filters.favorites ? 'active' : ''}`}
            onClick={() => handleChangeFilter('favorites')}
          >
            {text.filterFavorites()}
          </button>
        </div>
        <div className="filter-divider" />
        <div className="sort-group">
          <button
            className={`filter-tab sort-tab ${sort.creation ? 'active' : ''}`}
            onClick={() => handleChangeSort('creation')}
          >
            {text.filterCreation()} <Icon icon={getSortIcon(sort.creation)} />
          </button>
          <button
            className={`filter-tab sort-tab ${sort.alphabetical !== 'inactive' ? 'active' : ''}`}
            onClick={() => handleChangeSort('alphabetical')}
          >
            {text.filterAlphabetical()}{' '}
            <Icon icon={getSortIcon(sort.alphabetical)} />
          </button>
        </div>
      </div>
    </div>
  )
}
