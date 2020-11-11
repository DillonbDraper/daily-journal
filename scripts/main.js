import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"
import { JournalFormComponent } from "./JournalForm.js"
import "./filter/FilterBar.js"

JournalFormComponent()
EntryListComponent()