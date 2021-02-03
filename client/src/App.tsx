import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import StartWritingMenu from './components/StartWritingMenu'
import NoteEditor from './components/NoteEditor'
import Notes from './components/Notes'
import NoteViewer from './components/NoteViewer'

import './App.scss'

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Notes />
            <Footer />
            <StartWritingMenu />
            <NoteEditor />
            <NoteViewer />
        </div>
    )
}

export default App