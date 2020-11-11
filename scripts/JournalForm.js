import { saveEntries } from "./JournalDataProvider.js"
import { getMoods, useMoods } from "./Moods/MoodProvider.js"

const eventHub = document.getElementById("container")
const formContainer = document.getElementById("formContainer")

export const JournalFormComponent = () => {

    getMoods()
        .then(() => {
            const allMoods = useMoods()

            formContainer.innerHTML += `
    <h2>Daily Journal</h2>
        <form action="">
            <fieldset>
                <label for="journalDate">Date of entry </label>
                    <input type="date" name="jornalDate" id="journalDate">
            </fieldset>
        </form>
        <form action="">
            <fieldset>
                <label for="conceptsCovered">Concepts Covered</label>
                <input type="text" name="conceptsCovered" id="conceptsCovered">
            </fieldset>
        </form>
        <form action="">
            <fieldset>
                <label for="journalEntry">Journal Entry</label>
                <input type="text" name="journalEntry" id="journalEntry">
            </fieldset>
        </form>
        <form action="">
            <fieldset>` + `
                <label for="mood">Mood for the Day</label>
                <select id="moodSelector" name="mood"> 
                ${allMoods.map(
                (mood) => {
                    return `<option value="${mood.id}">${mood.label}</option>`
                }
            ).join("")
                }
                  </select>
            </fieldset>
        </form>
        <button type ="submit" id="record">Record Journal Entry</button>
    `
        })
}



eventHub.addEventListener("click", e => {
    if (e.target.id === "record") {

        const journalEntry = document.getElementById("journalEntry")
        const concepts = document.getElementById("conceptsCovered")
        const date = document.getElementById("journalDate")
        const moodSelector = document.getElementById("moodSelector")

        const entry = {
            date: date.value,
            concept: concepts.value,
            entry: journalEntry.value,
            moodId: parseInt(moodSelector.value)
        }

        saveEntries(entry)
    }
})
