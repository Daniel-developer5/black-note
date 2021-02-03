import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NoteEditorState } from './noteEditorSlice'
import { v4 as uuidv4 } from 'uuid'

export interface INote extends NoteEditorState {
    readonly id: string,
}

const notesSlice = createSlice({
    name: 'notes',
    initialState: [] as INote[],
    reducers: {
        addNote: {
            reducer: (state, action: PayloadAction<INote>) => {
                state.push(action.payload)
            },
            prepare: (note) => ({
                payload: { ...note, id: uuidv4() },
            }),
        }
    },
})

export const { addNote } = notesSlice.actions

export default notesSlice