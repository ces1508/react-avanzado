import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const containerApp = document.querySelector('#app')
const root = createRoot(containerApp)
root.render(<App />)
