import React from 'react'
import { Entry } from '../types'
import {
    filterEntriesByComments,
    filterEntriesByPoints,
} from '../services/filter'
import { saveUsageData } from '../utils/storage'

interface FilterButtonsProps {
    entries: Entry[]
    setFilteredEntries: React.Dispatch<React.SetStateAction<Entry[]>>
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
    entries,
    setFilteredEntries,
}) => {
    const handleFilterByComments = () => {
        const filtered = filterEntriesByComments(entries)
        setFilteredEntries(filtered)
        saveUsageData('comments')
    }

    const handleFilterByPoints = () => {
        const filtered = filterEntriesByPoints(entries)
        setFilteredEntries(filtered)
        saveUsageData('points')
    }

    return (
        <div>
            <button onClick={handleFilterByComments}>Filter by Comments</button>
            <button onClick={handleFilterByPoints}>Filter by Points</button>
        </div>
    )
}

export default FilterButtons
