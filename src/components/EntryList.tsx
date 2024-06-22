import React from 'react'
import { Entry } from '../types'
import EntryItem from './EntryItem'

interface EntryListProps {
    entries: Entry[]
}

const EntryList: React.FC<EntryListProps> = ({ entries }) => {
    return <EntryItem entries={entries} />
}

export default EntryList
