import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from '/src/app.jsx'
import "/src/index.css"

const root = createRoot(document.getElementById('root'))

root.render(
  <App />
)
