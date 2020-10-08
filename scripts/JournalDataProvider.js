/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "09/30/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Mid"
    },
    {
        id: 2,
        date: "10/02/2020",
        concept: "Complex Flexbox",
        entry: "I learned about wireframing with flexbox in mind and how to effectively save myself a ton of time while coding.",
        mood: "Triumphant"
    },
    {
        id: 3,
        date: "10/07/2020",
        concept: "Javascript DOM manipulation",
        entry: "Today we learned how to use modularly organized JS to automate HTML generation.  Both the general topics and the modularization were kinda hard.",
        mood: "Fatigued"
    }
    
    
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}