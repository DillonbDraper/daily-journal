import { useJournalEntries } from "../JournalDataProvider.js"
import { renderJournal } from "../JournalEntryList.js"

const eventHub = document.getElementById("container")

eventHub.addEventListener("change", e=> {
    if (e.target.id.startsWith("mood--")) {
        const moodArray = e.target.id.split("--")
        const moodFilterEvent = new CustomEvent("triggerMoodFilter", {
            detail: {
                moodId: parseInt(moodArray[1])
            }
        })
        eventHub.dispatchEvent(moodFilterEvent)
    }
})

eventHub.addEventListener("triggerMoodFilter", e => {
    const journalEntries = useJournalEntries()

    const moodFilteredEntires = journalEntries.filter(entry => entry.moodId === e.detail.moodId)
    renderJournal(moodFilteredEntires)
})