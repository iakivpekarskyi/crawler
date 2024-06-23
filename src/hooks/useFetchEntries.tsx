import { useEffect, useState } from 'react'
import { db } from '../firebase' // Import Firestore instance
import { Entry } from '../types'
import { collection, addDoc } from 'firebase/firestore'
import { fetchEntries as fetchApiEntries } from '../services/api' // Import function to fetch entries from external API

// Function to save entries to Firestore
export const saveEntriesToFirebase = async (entries: Entry[]) => {
    try {
        const entriesCollection = collection(db, 'entries') // Get reference to 'entries' collection
        for (const entry of entries) {
            await addDoc(entriesCollection, entry)
        }
    } catch (error) {
        console.error('Error saving entries to Firebase:', error)
    }
}

// Custom hook to fetch entries from an external API and save to Firestore
export const useFetchEntriesWithApiFetch = () => {
    const [entries, setEntries] = useState<Entry[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const getEntries = async () => {
            try {
                const fetchedEntries = await fetchApiEntries() // Fetch entries from API
                setEntries(fetchedEntries) // Update state with fetched entries
                await saveEntriesToFirebase(fetchedEntries) // Save fetched entries to Firestore
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
