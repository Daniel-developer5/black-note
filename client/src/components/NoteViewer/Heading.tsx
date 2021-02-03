import React from 'react'

import { toggleNoteViewer } from '../../redux/appSlice'
import { connect } from 'react-redux'
import { DispatchToProps } from '../../interfaces'

interface HeadingProps {
    toggleNoteViewer?: Function,
}

const Heading: React.FC<HeadingProps> = ({ toggleNoteViewer: closeViewer }) => {
    return (
        <div className="heading">
            <div
                onClick={() => closeViewer && closeViewer()}
                className="arrow"
            >
                <i className="fas fa-chevron-left"></i>
            </div>
            <ul>
                <li>
                    <span>A</span>
                </li>
                <li>
                    <span>
                        <sub>A</sub>A
                    </span>
                </li>
                <li>
                    <i className="fas fa-search"></i>
                </li>
                <li>
                    <i className="fas fa-lock"></i>
                </li>
                <li>
                    <i className="fas fa-trash"></i>
                </li>
                <li>
                    <i className="fas fa-pencil-alt"></i>
                </li>
                <li>
                    <i className="fas fa-star"></i>
                </li>
            </ul>
        </div>
    )
}

const mapDispatchToProps: DispatchToProps = {
    toggleNoteViewer,
}

export default connect(null, mapDispatchToProps)(Heading)