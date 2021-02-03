import React from 'react'

import { motion } from 'framer-motion'
import { connect } from 'react-redux'
import { RootState, DispatchToProps } from '../../interfaces'
import { toggleNoteEditor } from '../../redux/appSlice'

import './StartWritingMenu.scss'

interface StartMenuProps {
    isOpen?: boolean,
    toggleNoteEditor?: any,
}

const StartWritingMenu: React.FC<StartMenuProps> = ({ 
    isOpen, toggleNoteEditor 
}) => {
    const variants = {
        hidden: { transform: 'scale(0)' },
        visible: { transform: 'scale(1)' },
    }

    return (
        <motion.div 
            className="start-writing-menu"
            animate={isOpen ? "visible" : "hidden"}
            initial="hidden"
            variants={variants}
        >
            <ul>
                <li onClick={() => toggleNoteEditor()}>Note</li>
                <li>Todo List</li>
            </ul>
        </motion.div>
    )
}

const mapStateToProps = (state: RootState) => ({
    isOpen: state.app.startWritingMenu,
})

const mapDispatchToProps: DispatchToProps = {
    toggleNoteEditor,
}

export default connect(mapStateToProps, mapDispatchToProps)(StartWritingMenu)