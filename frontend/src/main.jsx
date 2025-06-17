import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Provider from './context/Provider.jsx'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
createRoot(document.getElementById('root')).render(
  <Provider>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
)
