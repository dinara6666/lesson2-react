import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  // <BrowRouter


  // >

  <BrowserRouter

    future={{
      v7_startTransition: true,
    }}>
    <App />
  </BrowserRouter>,
)








