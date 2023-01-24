import { useContext, useEffect, useReducer } from "react"
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import db from "../../firebase.config";
import { GetContactsContext } from "../contexts/GetContactsContext";
import { UserContext } from "../contexts/UserContext";
import { MessageContext } from "../contexts/MessageContext";







export default function useFetchMessages(userID, contactId, aiResponded) {
    // const { contact } = useContext(GetContactsContext)
    // const { currentUser } = useContext(UserContext)
    // const { aiResponded } = useContext(MessageContext)

    console.log(aiResponded)

    const initial_state = {
        replys: [],
        sends: [],
        messages: []
    }

    function reducerFnx(state, action) {
        switch (action.type) {
            case 'replys':
                return { ...state, replys: [...action.payload] }
                break
            case 'sends':
                return { ...state, sends: [...action.payload] }
                break
            case 'combine':
                return { ...state, messages: [...state.replys, ...state.sends] }
                break
            default:
                return { ...state }
                break
        }
    }

    const [messageState, dispatchMsgs] = useReducer(reducerFnx, initial_state)

    useEffect(() => {

        async function fetchMessages() {
            const q1 = query(collection(db, "testMsgs"), where("from", "==", `${contactId}`), where("to", "==", `${userID}`), orderBy("timestamp"));
            const q2 = query(collection(db, "testMsgs"), where("from", "==", `${userID}`), where("to", "==", `${contactId}`), orderBy("timestamp"));


            const con = []
            // get replys
            const querySnapshot1 = await onSnapshot(q1, q2, (querySnapshot1) => {
                let content = []
                querySnapshot1.forEach((doc) => {
                    content.push({ docId: doc.id, docData: doc.data() })
                });
                dispatchMsgs({ type: 'replys', payload: [...content] })
            });

            // get msgs sent 
            const querySnapshot2 = await onSnapshot(q2, (querySnapshot2) => {
                let content = []
                querySnapshot2.forEach((doc) => {
                    content.push({ docId: doc.id, docData: doc.data() })
                });
                dispatchMsgs({ type: 'sends', payload: [...content] })
                dispatchMsgs({ type: 'combine' })
            });
        }

        fetchMessages()
        
    }, [contactId, aiResponded])

    return { messageState }
}
