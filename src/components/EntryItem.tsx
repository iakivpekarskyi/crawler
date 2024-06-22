import { Entry } from '../types'
import React from 'react'

interface EntryItemProps {
    entries: Entry[]
}

const EntryItem: React.FC<EntryItemProps> = ({ entries }) => {
    return (
        <ul>
            {entries.map((entry) => (
                <li key={entry.number}>
                    <h2>{entry.title}</h2>
                    <p>Points: {entry.points}</p>
                    <p>Comments: {entry.comments}</p>
                </li>
            ))}
        </ul>
    )
}

export default EntryItem
