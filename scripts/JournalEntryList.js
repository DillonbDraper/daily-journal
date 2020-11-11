import { deleteEntry, getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered

const eventHub = document.getElementById("container")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component

    getEntries()
        .then(() => {
            const entries = useJournalEntries()

            renderJournal(entries)
            
        })
}

eventHub.addEventListener("deleteEntry", e => {
    deleteEntry(e.detail.entryId)
})

export const renderJournal = journalArrayToRender => {
    const entryLog = document.querySelector("#entryLog")


    entryLog.innerHTML = journalArrayToRender.map(entry => JournalEntryComponent(entry)).join("")
}