import React from 'react'
import './App.css'
import EntryList from './components/EntryList'
import { useFetchEntriesWithApiFetch } from './hooks/useFetchEntries'
import { useFilteredEntries } from './hooks/useFilteredEntries'
import FilterButtons from './components/FilterButtons'

const App: React.FC = () => {
    // Fetch entries using custom hook
    const { entries, loading, error } = useFetchEntriesWithApiFetch()
    // Handle filtering using another custom hook
    const { filteredEntries, filterByComments, filterByPoints, resetFilters } =
        useFilteredEntries(entries)

    if (loading) {
        return (
            <div className="container">
                <h1>Hacker News Entries</h1>
                <FilterButtons
                    onFilterByComments={filterByComments}
                    onFilterByPoints={filterByPoints}
                    onResetFilters={resetFilters}
                />
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className="container">
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
