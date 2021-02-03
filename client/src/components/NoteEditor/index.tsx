import React from 'react'

import { RootState, DispatchToProps } from '../../interfaces'
import { connect } from 'react-redux'
import { reset } from '../../redux/noteEditorSlice'
import { toggleNoteEditor } from '../../redux/appSlice'
import { addNote } from '../../redux/notesSlice'
import Heading from './Heading'
import NoteTextarea from './NoteTextarea'

import './NoteEditor.scss'

interface NoteEditorProps {
    isOpen?: boolean,
    title?: string,
    note?: string,
    toggleNoteEditor?: Function,
    color?: number,
    fontSize?: number,
    addNote?: Function,
    reset?: Function,
}

const NoteEditor: React.FC<NoteEditorProps> = ({ 
    isOpen, title, note,  
    toggleNoteEditor: toggleNE, color, fontSize,
    addNote, reset
}) => {
    const saveNote = (
        e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>
    ) => {
        e.preventDefault()

        if (note || title) {
            addNote && addNote({ title, note, color, fontSize })
        }

        toggleNE && toggleNE()
        reset && reset()
    }

    return (
        <div 
            className={`note-editor ${isOpen ? 'open' : ''}`}
        >
            <Heading saveNote={saveNote} />
            <NoteTextarea saveNote={saveNote} />
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    const 
        { title, note, color, fontSize } = state.noteEditor,
        { isNoteEditor: isOpen } = state.app

    return {
        title, note, color, fontSize, isOpen
    }
}

const mapDispatchToProps: DispatchToProps = {
    toggleNoteEditor, addNote, reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteEditor)