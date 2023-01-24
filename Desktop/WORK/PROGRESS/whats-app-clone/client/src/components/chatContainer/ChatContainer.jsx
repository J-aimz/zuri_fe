import { Header, Input, SendMessage } from '../'
import css from './ChatContainer.module.scss'
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { GetContactsContext } from '../../utils/contexts/GetContactsContext';
import useFetchMessages from '../../utils/customHooks/useFetchMessages';
import { UserContext } from '../../utils/contexts/UserContext';
import { MessageContext } from '../../utils/contexts/MessageContext';




function ChatContainer() {
  const { currentUser } = useContext(UserContext)
  const { contact } = useContext(GetContactsContext)
  const { aiResponded } = useContext(MessageContext)


  const { messageState } = useFetchMessages(currentUser.user.uid, contact.id, aiResponded)

  const lastMsgsCon = useRef(null)
  const msgsContainer = useRef(null)

  const [msgs, setMsgs] = useState([])


  function scroll() {
    lastMsgsCon.current.scrollIntoView()
  }

  // fnx to sort the array
  function sortMessages(a, b) {

    let first = new Date(a.docData?.timestamp?.seconds)
    let second = new Date(b.docData?.timestamp?.seconds)

    if (new Date(first) > new Date(second)) return 1
    else if (first < second) return -1
    return 0

  }

  useEffect(() => {
    setMsgs(prev => messageState.messages.sort(sortMessages))
    
    setTimeout(() => {
      lastMsgsCon.current.scrollIntoView()
    }, 1500);
  }, [messageState.messages, aiResponded])


  return (
    <div className={css.con}>
      <Header location={'chat'} contact={contact.contactName} imgURL={contact.imgURL} />

      <div className={css.chat__con}>
        <div className={css.overlay} onLoad={scroll} ref={msgsContainer}>
          {
            // msg = [] ||
            msgs.map((el, ind) => (
              <SendMessage key={ind} id={el.docId} data={el.docData} />
            ))
          }
          <div className={css.scrollGap} ref={lastMsgsCon}/>

        </div>
        <div className={css.input__con}>
          <Input />
        </div>
      </div>
    </div>
  )
}

export default ChatContainer