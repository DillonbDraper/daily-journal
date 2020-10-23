/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
let journal = []
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
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