import { useEffect, useState } from 'react'
import { fetchEntries } from '../services/api'
import { getStoredEntries, saveEntries } from '../utils/storage'
import { Entry } from '../types'

export const useFetchEntries = () => {
    const [entries, setEntries] = useState<Entry[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getEntries = async () => {
            try {
                const storedEntries = getStoredEntries()
                if (storedEntries.length > 0) {
                    setEntries(storedEntries)
                } else {
                    const fetchedEntries = await fetchEntries()
                    setEntries(fetchedEntries)
                    saveEntries(fetchedEntries)
                }
            } catch (error) {
                setError('Error fetching entries')
            } finally {
                setLoading(false)
            }
        }
        getEntries()
    }, [])

    return { entries, loading, error }
}
