import { deleteEntry, getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered

const eventHub = document.getElementById("container")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entryLog = document.querySelector("#entryLog")

    getEntries()
        .then(() => {
            const entries = useJournalEntries()

            let entryHTML = entries.map(entry => JournalEntryComponent(entry)).join("")
            entryLog.innerHTML = entryHTML
            
            eventHub.addEventListener("click", e => {
                if (e.target.id.startsWith("delete--")) {
                    const idArray = e.target.id.split("--")
          
                    const deleteEntry = new CustomEvent("deleteEntry", {
                        detail: {
                            entryId: idArray[1]
                        }
                    })
                    eventHub.dispatchEvent(deleteEntry)
                }
            })
        })
}

eventHub.addEventListener("deleteEntry", e => {
    deleteEntry(e.detail.entryId)
})