import React from 'react'

interface NoteProps {
    title: string,
    openNote: () => void,
}

const Note: React.FC<NoteProps> = ({ title, openNote }) => {
    return (
        <li onClick={openNote}>
            <div className="star">
                <i className="fas fa-star"></i>
            </div>
            <div className="content">
                { title }
            </div>
        </li>
    )
}

export default Note