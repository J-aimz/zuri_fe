import { createContext, useState } from "react";



export const GetContactsContext = createContext()

// component starts here
function GetContactsContextProvider({ children }) {


  // state for each contact
  const [contact, setContact] = useState({
    id: '',
    contactName: '',
    imgURL: '',
    showChatPage: false,
    smToggleDisplay: false
  })
  
  // return Provider
  return (
    <GetContactsContext.Provider value={{
      contact: contact,
      setContact: setContact,
    }}>
      {children}
    </GetContactsContext.Provider>
  )
}

export default GetContactsContextProvider
