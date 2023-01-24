import { memo, useContext, useEffect, useState } from 'react'
import css from './ChatPage.module.scss'
import { ChatContainer, SideBar, Welcome } from '../../components'
import { GetContactsContext } from '../../utils/contexts/GetContactsContext'


function ChatPage() {
  const { contact } = useContext(GetContactsContext)
  const [screenWidth, setScreenWidth] = useState(false)



  const MemoSideBar = memo(SideBar)
  const MemoChatContainer = memo(ChatContainer)

  
  useEffect(() => {
    if (window.screen.width < 577) {
      setScreenWidth(true)
    }
  },[])
  return (
      <div className={css.chatPage__con}>
        <div className={css.content}>

        <div className={css.LHS} style={screenWidth  && { display: contact.smToggleDisplay ? 'none' : 'block' } || {}}>
          <MemoSideBar />
          </div>
        <div className={css.mid} style={screenWidth  && { display: !contact.smToggleDisplay ? 'none' : 'block' } || {}}>
            {
            contact.showChatPage ? <MemoChatContainer /> :  <Welcome />
            }
          </div>
        </div>

      </div>
  )
}

export default ChatPage