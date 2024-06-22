import React from 'react'
import { Entry } from '../types'

interface EntryItemProps {
    entry: Entry
}

const EntryItem: React.FC<EntryItemProps> = ({ entry }) => {
    return (
        <li className="entry-item">
            <h2>{entry.title}</h2>
            <p>Points: {entry.points}</p>
            <p>Comments: {entry.comments}</p>
        </li>
    )
}

export default EntryItem
