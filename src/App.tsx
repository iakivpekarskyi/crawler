import React, { useState } from 'react'
import './App.css'
import EntryList from './components/EntryList'
import { Entry } from './types'
import { useFetchEntries } from './hooks/useFetchEntries'
import FilterButtons from './components/FilterButtons'

const App: React.FC = () => {
    const { entries, loading, error } = useFetchEntries()
    const [filteredEntries, setFilteredEntries] = useState<Entry[]>([])

    if (loading) {
        return <div> Loading</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h1>Hacker News Entries</h1>
            <FilterButtons
                entries={entries}
                setFilteredEntries={setFilteredEntries}
            />
            <EntryList
                entries={filteredEntries.length > 0 ? filteredEntries : entries}
            />
        </div>
    )
}

export default App
