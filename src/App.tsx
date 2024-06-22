import React from 'react'
import './App.css'
import EntryList from './components/EntryList'
import { useFetchEntries } from './hooks/useFetchEntries'
import { useFilteredEntries } from './hooks/useFilteredEntries'
import FilterButtons from './components/FilterButtons'

/**
 * The main App component.
 * It fetches the entries, handles the loading and error states,
 * and renders the filter buttons and entry list.
 */

const App: React.FC = () => {
    // Custom hook to fetch entries
    const { entries, loading, error } = useFetchEntries()
    // Custom hook for filter buttons
    const { filteredEntries, filterByComments, filterByPoints, resetFilters } =
        useFilteredEntries(entries)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h1>Hacker News Entries</h1>
            {/* Render filter buttons */}
            <FilterButtons
                onFilterByComments={filterByComments}
                onFilterByPoints={filterByPoints}
                onResetFilters={resetFilters}
            />
            {/* Render entry list, showing filtered entries if any */}
            <EntryList entries={filteredEntries} />
        </div>
    )
}

export default App
