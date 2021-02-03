import React from 'react'

import { RootState } from '../../interfaces'
import { connect } from 'react-redux'
import { getStyle } from '../../redux/noteEditorSlice'
import Heading from './Heading'

import './NoteViewer.scss'

interface NoteViewerProps {
    isOpen?: boolean,
    title?: string,
    note?: string,
    color?: number,
    fontSize?: number,
}

const NoteViewer: React.FC<NoteViewerProps> = ({ 
    isOpen, title, note, color, fontSize 
}) => {
    return (
        <div 
            className={`note-viewer ${isOpen ? 'open' : ''}`}
        >
            <Heading />
            <div className="content">
                <span>Category</span>
                { title && <div>{title}</div> }
                { note && 
                    <div 
                        className="note"
                        style={getStyle(color || 0, fontSize || 0)}
                    >{note}</div> 
                }
            </div>
            <div className="info">
                <div>
                    <i className="fas fa-info-circle"></i>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    const { 
        isOpen, title, note, 
        color, fontSize,
    } = state.app.noteViewer

    return { 
        isOpen, title, note, 
        color, fontSize 
    }
}

export default connect(mapStateToProps)(NoteViewer)