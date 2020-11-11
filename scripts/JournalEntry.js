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