import { createSlice } from '@reduxjs/toolkit'

export interface NoteEditorState {
    title: string,
    note: string,
    color: number,
    fontSize: number,
}

const initialState: NoteEditorState = {
    title: '',
    note: '',
    color: 0,
    fontSize: 0,
}

const 
    MAX_COLOR: number = 2,
    MAX_FONT_SIZE: number = 5

const noteEditorSlice = createSlice({
    name: 'noteEditor',
    initialState,
    reducers: {
        setTitle: (state: NoteEditorState, { payload }) => {
            state.title = payload
        },
        setNote: (state: NoteEditorState, { payload }) => {
            state.note = payload
        },
        setColor: (state: NoteEditorState) => {
            if (state.color === MAX_COLOR) {
                state.color = 0
            } else {
                state.color = state.color + 1
            }
        },
        setFontSize: (state: NoteEditorState) => {
            if (state.fontSize === MAX_FONT_SIZE) {
                state.fontSize = 0
            } else {
                state.fontSize = state.fontSize + 1
            }
        },
        reset: (state: NoteEditorState) => {
            state.title = ''
            state.note = ''
            state.color = 0
            state.fontSize = 0
        },
    },
})

export const { 
    setTitle, setNote,
    setColor, setFontSize, reset,
} = noteEditorSlice.actions

export default noteEditorSlice

const 
    colors: string[] = ['#636363', '#ececec', '#fff'],
    sizes: string[] = ['18px', '20px', '22px', '25px', '28px', '30px']

export const getStyle = (color: number, fontSize: number) => ({
    color: colors[color],
    fontSize: sizes[fontSize]
})