const entryTarget = document.querySelector("#container")

export const JournalFormComponent = () => {
    entryTarget.innerHTML+= `
    <h2>Daily Journal</h2>
        <form action="">
            <fieldset>
                <label for="journalDate">Date of entry</< /label>
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
            <fieldset>
                <label for="mood">Mood for the Day</label>
                <select id="mood" name="mood"> 
                      <option>Hopeful</option>
                      <option selected>Frustrated</option>
                      <option>Excited</option>
                      <option>Fatigued</option>
                      <option>Confident</option>
                      <option>Lost</option>
                      <option>Triumphant</option>
                      <option>Mid</option>

                  </select>
            </fieldset>
        </form>
        <button type ="submit" id="record">Record Journal Entry</button>
    `
}