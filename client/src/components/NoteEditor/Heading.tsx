import React from 'react'

import { connect } from 'react-redux'
import { DispatchToProps, RootState } from '../../interfaces'
import { 
    setTitle, setColor, setFontSize,
} from '../../redux/noteEditorSlice'

interface HeadingProps {
    saveNote: (
        e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>
    ) => void,
    title?: string,
    setTitle?: Function,
    setColor?: Function,
    setFontSize?: Function,
}

const Heading: React.FC<HeadingProps> = ({
    saveNote, title, setTitle,
    setColor, setFontSize
}) => {
    return (
        <div className="heading">
            <div
                className="arrow"
                onClick={saveNote}
            >
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="input-box">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle && setTitle(e.target.value)}
                />
            </div>
            <div className="text-options">
                <span onClick={() => setColor && setColor()}>A</span>
                <span onClick={() => setFontSize && setFontSize()}>
                    <sub>A</sub>A
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    title: state.noteEditor.title,
})

const mapDispatchToProps: DispatchToProps = {
    setTitle, setColor, setFontSize,
}

export default connect(mapStateToProps, mapDispatchToProps)(Heading)