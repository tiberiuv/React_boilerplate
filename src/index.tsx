import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './app'
// import 'dotenv/config'

const isDev = global.NODE_ENV === 'development'
console.log(isDev, global)

const Inner = () => (
    <Router>
        <App />
    </Router>
)

const Outer = () =>
    isDev ? (
        <React.StrictMode>
            <Inner />
        </React.StrictMode>
    ) : (
        <Inner />
    )

ReactDOM.render(<Outer />, document.getElementById('root'))
