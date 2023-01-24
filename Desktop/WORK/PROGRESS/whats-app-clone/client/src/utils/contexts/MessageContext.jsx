import { createContext, useContext, useEffect, useState } from "react"
import useFetchMessages from "../customHooks/useFetchMessages"
import { GetContactsContext } from "./GetContactsContext"


export const MessageContext = createContext()


function MessageContextProvider({ children }) {
    const [aiResponded, setAiResponded] = useState(0)
    // console.log(aiResponed)

    return (
        <MessageContext.Provider value={{ aiResponded, setAiResponded }}>
            {children}
        </MessageContext.Provider>


    )
}

export default MessageContextProvider































