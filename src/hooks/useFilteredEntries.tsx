import { useState, useMemo } from 'react'
import { Entry } from '../types'
import {
    filterEntriesByComments,
    filterEntriesByPoints,
} from '../services/filter'
import { saveUsageData } from '../utils/storage'

export const useFilteredEntries = (entries: Entry[]) => {
    const [filterType, setFilterType] = useState<string | null>(null)

    const filteredEntries = useMemo(() => {
        if (filterType === 'comments') {
            return filterEntriesByComments(entries)
        } else if (filterType === 'points') {
            return filterEntriesByPoints(entries)
        } else {
            return entries
        }
    }, [entries, filterType])

    const filterByComments = () => {
        setFilterType('comments')
        saveUsageData('comments')
    }

    const filterByPoints = () => {
        setFilterType('points')
        saveUsageData('points')
    }

    const resetFilters = () => {
        setFilterType(null)
    }

    return {
        filteredEntries,
        filterByComments,
        filterByPoints,
        resetFilters,
    }
}
