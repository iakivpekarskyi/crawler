import React from 'react'
import './App.css'
import EntryList from './components/EntryList'
import { useFetchEntries } from './hooks/useFetchEntries'
import { useFilteredEntries } from './hooks/useFilteredEntries'
import FilterButtons from './components/FilterButtons'

const App: React.FC = () => {
    const { entries, loading, error } = useFetchEntries()
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
            <FilterButtons
                onFilterByComments={filterByComments}
                onFilterByPoints={filterByPoints}
                onResetFilters={resetFilters}
            />
            <EntryList entries={filteredEntries} />
        </div>
    )
}

export default App
