import { Entry } from '../types'

/**
 * Counts the words in a title, ignoring symbols.
 * @param {string} title - The title to count words in.
 * @returns {number} - The number of words in the title.
 */

const countWords = (title: string): number => {
    return title.replace(/[^a-zA-Z ]/g, '').split(' ').length
}

/**
 * Filters entries with more than 5 words in the title and sorts them by comments.
 * @param {Entry[]} entries - The entries to filter and sort.
 * @returns {Entry[]} - The filtered and sorted entries.
 */

export const filterEntriesByComments = (entries: Entry[]): Entry[] => {
    return entries
        .filter((entry) => countWords(entry.title) > 5)
        .sort((a, b) => b.comments - a.comments)
}

/**
 * Filters entries with 5 or fewer words in the title and sorts them by points.
 * @param {Entry[]} entries - The entries to filter and sort.
 * @returns {Entry[]} - The filtered and sorted entries.
 */

export const filterEntriesByPoints = (entries: Entry[]): Entry[] => {
    return entries
        .filter((entry) => countWords(entry.title) <= 5)
        .sort((a, b) => b.points - a.points)
}
