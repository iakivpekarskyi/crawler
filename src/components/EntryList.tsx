import React from 'react'
import { Entry } from '../types'
import EntryItem from './EntryItem'

interface EntryListProps {
    entries: Entry[]
}

/**
 * EntryList component.
 * Renders a list of entries.
 */

const EntryList: React.FC<EntryListProps> = ({ entries }) => {
    return (
        <div>
            <EntryItem entries={entries} />
        </div>
    )
}

export default EntryList
