import css from './Input.module.scss'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';
import { GetContactsContext } from '../../utils/contexts/GetContactsContext';
import db from '../../firebase.config';
import { collection, addDoc, doc } from "firebase/firestore";
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { MessageContext } from '../../utils/contexts/MessageContext';



function Input() {
    const [text, setText] = useState('')
    const input = useRef('')

    const { currentUser } = useContext(UserContext)
    const { contact } = useContext(GetContactsContext)
    const { setAiResponded } = useContext(MessageContext)


    function handleForm(e) {
        e.preventDefault()

        // chk if msg is empty. if true return
        if (text.trim() == '' || text == ' ') {
            setText('')
            input.current.focus()
            return
        }

        // chk if the contact id is that of the b🤖t
        if (contact.id = `tp6ZHxQ5PS3gcDvKgkEa`) {
            // if true send user msg to gtp 
            sendMsgToGPT(text, contact.id, currentUser.user.uid)
        }
        // post user msg to db
        sendMsg(currentUser.user.uid, text, contact.id)
        setText('')
    }

    async function sendMsgToGPT(message, from, to) {
        const response = await fetch("http://localhost:3080", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                message: `${message}`
            })
        })
        const data = await response.json()
        console.log(data.data, 'openAI')
        // post gtp response to db
        sendMsg(from, data.data, to)
        setTimeout(() => {
            setAiResponded(prev => prev + 1)
        }, 1200)

    }

    async function sendMsg(from, msg, to) {


        const docRef = await addDoc(collection(db, "testMsgs"), {
            from: `${from}`,
            msg: `${msg}`,
            timestamp: '',
            to: `${to}`
        });

        const Ref = doc(db, 'testMsgs', docRef.id);

        const updateTimestamp = await updateDoc(Ref, {
            timestamp: serverTimestamp()
        });

    }

    return (
        <div className={css.con}>
            <span>
                <EmojiEmotionsIcon className={css.icons} />
                <AttachFileIcon className={css.icons} />
            </span>
            <form onSubmit={handleForm}>

                <input
                    type="textarea"
                    placeholder='Type a message'
                    value={text}
                    name='text'
                    onChange={(e) => setText(e.target.value)}
                    ref={input}
                />

                <span>
                    {text && <SendIcon className={css.icons} onClick={handleForm} />}
                </span>
            </form>
        </div>
    )
}

export default Input