import React from 'react'

import { connect } from 'react-redux'
import { DispatchToProps, RootState } from '../../interfaces'
import { INote } from '../../redux/notesSlice'
import Note from './Note'
import { toggleNoteViewer } from '../../redux/appSlice'

import './Notes.scss'

interface NotesState {
    notes?: INote[],
    toggleNoteViewer?: Function,
}

const Notes: React.FC<NotesState> = ({ 
    notes, toggleNoteViewer: openNote
}) => {
    return (
        <div className="notes">
            <ul>
                { notes && notes.map(({ 
                    title, note, id, color, fontSize 
                }) => (
                    <Note 
                        key={id} 
                        title={title || note} 
                        openNote={() => openNote && openNote({ 
                            title, note, color, fontSize
                        })}
                    />
                )) }
            </ul>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    notes: state.notes,
})

const mapDispatchToProps: DispatchToProps = {
    toggleNoteViewer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes)