import React, { useEffect, useState } from 'react'
import './App.css'
import { fetchEntries } from './services/api'
import EntryList from './components/EntryList'
import { Entry } from './types'

const App: React.FC = () => {
    const [entries, setEntries] = useState<Entry[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getEntries = async () => {
            try {
                const storedEntries = localStorage.getItem('entries')
                if (storedEntries) {
                    setEntries(JSON.parse(storedEntries))
                } else {
                    const entries = await fetchEntries()
                    setEntries(entries)
                    localStorage.setItem('entries', JSON.stringify(entries))
                }
            } catch (error) {
                setError('Error fetching entries')
            } finally {
                setLoading(false)
            }
        }
        getEntries()
    }, [])

    if (loading) {
        return <div> Loading</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div>
            <h1>Hacker News Entries</h1>
            <EntryList entries={entries} />
        </div>
    )
}

export default App
