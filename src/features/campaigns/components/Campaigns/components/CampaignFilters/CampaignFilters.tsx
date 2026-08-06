import { Icon } from '@/shared/ui/Icon/Icon'
import { useText } from '@/features/langs/hooks/useText'
import { campaignsText } from '../../Campaigns.langs'
import './CampaignFilters.css'

export type FilterType = 'active' | 'recent' | 'favorites'
export type SortType = 'alphabetical' | 'creation'

interface CampaignFiltersProps {
  activeFilter: FilterType | null
  onFilterChange: (filter: FilterType | null) => void
  sortBy: SortType
  onSortChange: (sort: SortType) => void
  isAlphabeticalAsc: boolean
  onToggleAlphabeticalAsc: () => void
  isCreationAsc: boolean
  onToggleCreationAsc: () => void
}

export const CampaignFilters = ({
  activeFilter,
  onFilterChange,
  sortBy,
  onSortChange,
  isAlphabeticalAsc,
  onToggleAlphabeticalAsc,
  isCreationAsc,
  onToggleCreationAsc,
}: CampaignFiltersProps) => {
  const text = useText(campaignsText)

  const handleSortClick = (sort: SortType) => {
    if (sort === 'alphabetical') {
      if (sortBy === 'alphabetical') {
        onToggleAlphabeticalAsc()
      } else {
        onSortChange('alphabetical')
      }
    } else if (sort === 'creation') {
      if (sortBy === 'creation') {
        onToggleCreationAsc()
      } else {
        onSortChange('creation')
      }
    }
  }

  return (
    <div className="campaigns-filters">
      <div className="filters-capsule">
        <div className="filter-group">
          <button
            className={`filter-tab ${activeFilter === 'active' ? 'active' : ''}`}
            onClick={() => onFilterChange('active')}
          >
            {text.filterActive()}
          </button>
          <button
            className={`filter-tab ${activeFilter === 'recent' ? 'active' : ''}`}
            onClick={() => onFilterChange('recent')}
          >
            {text.filterRecent()}
          </button>
          <button
            className={`filter-tab ${activeFilter === 'favorites' ? 'active' : ''}`}
            onClick={() => onFilterChange('favorites')}
          >
            {text.filterFavorites()}
          </button>
        </div>
        <div className="filter-divider" />
        <div className="sort-group">
          <button
            className={`filter-tab sort-tab ${sortBy === 'creation' ? 'active' : ''}`}
            onClick={() => handleSortClick('creation')}
          >
            {text.filterCreation()}{' '}
            <Icon icon={isCreationAsc ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down'} />
          </button>
          <button
            className={`filter-tab sort-tab ${sortBy === 'alphabetical' ? 'active' : ''}`}
            onClick={() => handleSortClick('alphabetical')}
          >
            {text.filterAlphabetical()}{' '}
            <Icon icon={isAlphabeticalAsc ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down'} />
          </button>
        </div>
      </div>
    </div>
  )
}
