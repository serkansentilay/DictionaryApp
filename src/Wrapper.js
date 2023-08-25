import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './context/store'

const Wrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Wrapper
