// TypeScript interfaces for the application

export interface Entry {
    number: number
    title: string
    points: number
    comments: number
}

export interface Story {
    id: number
    title: string
    score: number
    descendants: number
}

export interface UsageData {
    timestamp: string
    filterType: string
}
