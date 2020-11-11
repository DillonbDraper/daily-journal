import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered


export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entryLog = document.querySelector("#entryLog")

    getEntries()
        .then(() => {
            const entries = useJournalEntries()

            let entryHTML = entries.map(entry => JournalEntryComponent(entry)).join("")
            entryLog.innerHTML = entryHTML
            console.log(entryLog)
        })
}