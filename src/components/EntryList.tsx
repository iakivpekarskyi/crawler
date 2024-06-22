import React from 'react'
import { Entry } from '../types'
import EntryItem from './EntryItem'

interface EntryListProps {
    entries: Entry[]
}

const EntryList: React.FC<EntryListProps> = ({ entries }) => {
    return (
        <div>
            <EntryItem entries={entries} />
        </div>
    )
}

export default EntryList
