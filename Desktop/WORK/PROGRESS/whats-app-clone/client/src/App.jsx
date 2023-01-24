import { useContext, useState } from 'react'
import './App.scss'
import { ChatPage, Home } from './pages'
import GetContactsContextProvider from './utils/contexts/GetContactsContext'
import MessageContextProvider from './utils/contexts/MessageContext'
import { UserContext } from './utils/contexts/UserContext'


function App() {
  const {currentUser} = useContext(UserContext)

  // console.log(currentUser.email, currentUser)



  return (
    
    <div className={`App app__padding`}>
      <GetContactsContextProvider>
        <MessageContextProvider>
          {currentUser.user ? <ChatPage /> :  <Home />}
        </MessageContextProvider>
      </GetContactsContextProvider>
    </div>


  )
}

export default App
