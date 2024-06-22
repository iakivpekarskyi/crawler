import React from 'react'
import { Entry } from '../types'
import EntryItem from './EntryItem'

interface EntryListProps {
    entries: Entry[]
}

const EntryList: React.FC<EntryListProps> = ({ entries }) => {
    return (
        <ul className="entry-list">
            {entries.map((entry) => (
                <EntryItem key={entry.number} entry={entry} />
            ))}
        </ul>
    )
}

export default EntryList
