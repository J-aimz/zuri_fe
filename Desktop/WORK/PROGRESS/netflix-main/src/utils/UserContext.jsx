import { createContext, useReducer } from "react"



export const UserContext = createContext()


function UserContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) =>{
        switch (action.type) {
            case 'email':
                return {...state, email: action.payload}
            case 'password':
                return {...state, password: action.payload}
            default:
                return {...state}
        }
    }, {
        email: '',
        password: '',
    })

    console.log(state.email)

  return (
    <UserContext.Provider value={ {state , dispatch} }>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider