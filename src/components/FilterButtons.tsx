import React from 'react'

interface FilterButtonsProps {
    onFilterByComments: () => void
    onFilterByPoints: () => void
    onResetFilters: () => void
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
    onFilterByComments,
    onFilterByPoints,
    onResetFilters,
}) => {
    return (
        <div>
            <button onClick={onFilterByComments}>Filter by Comments</button>
            <button onClick={onFilterByPoints}>Filter by Points</button>
            <button onClick={onResetFilters}>Reset Filters</button>
        </div>
    )
}

export default FilterButtons
