import { Entry, UsageData } from '../types'

/**
 * Retrieves stored entries from local storage.
 * @returns {Entry[]} - The stored entries.
 */

export const getStoredEntries = (): Entry[] => {
    const storedEntries = localStorage.getItem('entries')
    return storedEntries ? JSON.parse(storedEntries) : []
}

/**
 * Saves entries to local storage.
 * @param {Entry[]} entries - The entries to save.
 */

export const saveEntries = (entries: Entry[]): void => {
    localStorage.setItem('entries', JSON.stringify(entries))
}

/**
 * Saves usage data to local storage.
 * @param {string} filterType - The type of filter applied.
 */

export const saveUsageData = (filterType: string): void => {
    const data: UsageData = {
        timestamp: new Date().toISOString(),
        filterType,
    }

    const existingData = JSON.parse(localStorage.getItem('usageData') ?? '[]')
    existingData.push(data)
    localStorage.setItem('usageData', JSON.stringify(existingData))
}
