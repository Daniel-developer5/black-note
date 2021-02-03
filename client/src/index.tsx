import React from 'react'
import { render } from 'react-dom'

import App from './App'
import appSlice from './redux/appSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import noteEditorSlice from './redux/noteEditorSlice'
import notesSlice from './redux/notesSlice'

export const store = configureStore({
    reducer: combineReducers({
        app: appSlice.reducer,
        noteEditor: noteEditorSlice.reducer,
        notes: notesSlice.reducer,
    }),
})

//store.subscribe(() => console.log(store.getState()))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)