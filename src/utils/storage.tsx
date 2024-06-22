import { Entry, UsageData } from '../types'

export const getStoredEntries = (): Entry[] => {
    const storedEntries = localStorage.getItem('entries')
    return storedEntries ? JSON.parse(storedEntries) : []
}
export const saveEntries = (entries: Entry[]): void => {
    localStorage.setItem('entries', JSON.stringify(entries))
}

export const saveUsageData = (filterType: string): void => {
    const data: UsageData = {
        timestamp: new Date().toISOString(),
        filterType,
    }

    const existingData = JSON.parse(localStorage.getItem('usageData') ?? '[]')
    existingData.push(data)
    localStorage.setItem('usageData', JSON.stringify(existingData))
}
