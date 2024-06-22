import { UsageData } from '../types'

export const saveUsageData = (filterType: string): void => {
    const data: UsageData = {
        timestamp: new Date().toISOString(),
        filterType,
    }

    const existingData = JSON.parse(localStorage.getItem('usageData') ?? '[]')
    existingData.push(data)
    localStorage.setItem('usageData', JSON.stringify(existingData))
}
