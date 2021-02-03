import React from 'react'

import { connect } from 'react-redux'
import { DispatchToProps, RootState } from '../../interfaces'
import { setNote, getStyle } from '../../redux/noteEditorSlice'

interface TxtAreaProps {
    saveNote: (
        e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>
    ) => void,
    note?: string,
    setNote?: Function,
    color?: number,
    fontSize?: number,
}

const NoteTextarea: React.FC<TxtAreaProps> = ({
    saveNote, note, setNote, color, fontSize
}) => {
    return (
        <form onSubmit={saveNote}>
            <textarea
                placeholder="Content"
                value={note}
                onChange={e => setNote && setNote(e.target.value)}
                style={getStyle(color || 0, fontSize || 0)}
            ></textarea>
            <button>Save</button>
        </form>
    )
}

const mapStateToProps = (state: RootState) => {
    const { note, color, fontSize, } = state.noteEditor

    return { note, color, fontSize, }
}

const mapDispatchToProps: DispatchToProps = { setNote, }

export default connect(mapStateToProps, mapDispatchToProps)(NoteTextarea)