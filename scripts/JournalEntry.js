const eventHub = document.getElementById("container")

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <h3 class="concepts">${entry.concept}</h3>
            <p class="entry">${entry.entry}</p>
            <p class="date">${entry.date}</p>
            <p class="mood">${entry.mood.label}</p>
            <button type="button" id="delete--${entry.id}">Delete Entry</button>
        </section>
    `
}

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