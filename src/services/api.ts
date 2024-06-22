import axios from 'axios'
import { Entry } from '../types'

export const fetchEntries = async (): Promise<Entry[]> => {
    try {
        const response = await axios.get(
            'https://hacker-news.firebaseio.com/v0/topstories.json'
        )
        const topStoryIds = response.data.slice(0, 30)
        const entryPromises = topStoryIds.map(async (id: number) => {
            const storyResponse = await axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            )
            const story = storyResponse.data

            return {
                number: id,
                title: story.title,
                points: story.score,
                comments: story.descendants,
            }
        })
        return await Promise.all(entryPromises)
    } catch (error) {
        console.error('Error fetching entries:', error)
        throw error
    }
}
