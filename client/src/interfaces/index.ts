import { AppState } from '../redux/appSlice'
import { NoteEditorState } from '../redux/noteEditorSlice'
import { INote } from '../redux/notesSlice'
import { 
    ActionCreatorWithoutPayload, 
    ActionCreatorWithPayload 
} from '@reduxjs/toolkit'

export interface RootState {
    app: AppState,
    noteEditor: NoteEditorState,
    notes: INote[],
}

export interface DispatchToProps {
    [key: string]: ActionCreatorWithoutPayload | ActionCreatorWithPayload<any>,
}