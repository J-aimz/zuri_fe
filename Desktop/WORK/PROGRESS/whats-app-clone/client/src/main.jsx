import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import UserContextProvider from './utils/contexts/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>

)
