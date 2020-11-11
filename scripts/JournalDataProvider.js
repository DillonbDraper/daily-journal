/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

import { EntryListComponent } from "./JournalEntryList.js"

// This is the original data.
let journal = []
const eventHub = document.querySelector("#container")
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(r => r.json())  // Parse as JSON
        .then(entries => journal = entries)
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveEntries = (newJournalEntry) => { return fetch("http://localhost:8088/entries?_expand=mood", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
    .then(getEntries())  // <-- Get all journal entries
    .then(dispatchStateChangeEvent())  // <-- Broadcast the state change event
}

eventHub.addEventListener("journalStateChanged", e => {
    EntryListComponent()
})

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE",
    })
    .then(EntryListComponent)
}