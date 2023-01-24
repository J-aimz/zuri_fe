import { createContext, useEffect, useReducer } from "react";


const init_state ={
    user: JSON.parse(localStorage.getItem('user')) || null,
}
export const UserContext = createContext()




function UserContextProvider({children}) {
    const dispatchFnx = (state, action) =>{
        switch (action.type) {
            case 'login':
                return { ...state, user: action.payLoad}
                break;
            case 'logout':
                return { ...state, user: action.payLoad}
                break;
            default:
                return { ...state }
                break;
        }
    }

    const [state, dispatch] = useReducer(dispatchFnx, init_state)

    
    useEffect(() =>{
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state])

    return (
    <UserContext.Provider value={{
        currentUser: state,
        dispatchUser: dispatch
    }}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider