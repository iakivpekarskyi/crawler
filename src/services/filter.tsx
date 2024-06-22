import { Entry } from '../types'

const countWords = (title: string): number => {
    return title.replace(/[^a-zA-Z ]/g, '').split(' ').length
}

export const filterEntriesByComments = (entries: Entry[]): Entry[] => {
    return entries
        .filter((entry) => countWords(entry.title) > 5)
        .sort((a, b) => b.comments - a.comments)
}

export const filterEntriesByPoints = (entries: Entry[]): Entry[] => {
    return entries
        .filter((entry) => countWords(entry.title) <= 5)
        .sort((a, b) => b.points - a.points)
}
