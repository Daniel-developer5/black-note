import { createSlice } from '@reduxjs/toolkit'
import { store } from '..'
import { NoteEditorState } from './noteEditorSlice'

interface NoteViewer extends NoteEditorState {
    isOpen: boolean,
}

export interface AppState {
    startWritingMenu: boolean,
    isNoteEditor: boolean,
    noteViewer: NoteViewer,
}

const initialState: AppState = {
    startWritingMenu: false,
    isNoteEditor: false,
    noteViewer: {
        isOpen: false,
        title: '',
        note: '', 
        color: 0,
        fontSize: 0,  
    },
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleStartWritingMenu: (state: AppState) => {
            state.startWritingMenu = !state.startWritingMenu

            if (state.startWritingMenu) {
                document.addEventListener('click', hideMenu)
            } else {
                document.removeEventListener('click', hideMenu)
            }
        },
        toggleNoteEditor: (state: AppState) => {
            state.isNoteEditor = !state.isNoteEditor
        },
        toggleNoteViewer: (state: AppState, { payload }) => {
            state.noteViewer = {
                isOpen: !state.noteViewer.isOpen,
                title: payload?.title || '',
                note: payload?.note || '',
                color: payload?.color || 0,
                fontSize: payload?.fontSize || 0,
            }
        },
    },
})

export default appSlice

export const { 
    toggleStartWritingMenu,
    toggleNoteEditor, toggleNoteViewer,
} = appSlice.actions

const hideMenu = (e: Event) => {
    if (!(e.target as HTMLElement).className.match(/plus/)) {
        store.dispatch(toggleStartWritingMenu())
    }
}