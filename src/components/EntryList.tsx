import React from 'react'
import { Entry } from '../types'
import EntryItem from './EntryItem'

interface EntryListProps {
    entries: Entry[]
    onFilterByComments: () => void
    onFilterByPoints: () => void
}

const EntryList: React.FC<EntryListProps> = ({
    entries,
    onFilterByComments,
    onFilterByPoints,
}) => {
    return (
        <div>
            <button onClick={onFilterByComments}>Filter by Comments</button>
            <button onClick={onFilterByPoints}>Filter by Points</button>
            <EntryItem entries={entries} />
        </div>
    )
}

export default EntryList
