import css from './SendMessage.module.scss'
import { TiTick } from 'react-icons/ti'
import { useContext } from 'react'
import { UserContext } from '../../utils/contexts/UserContext'

function SendMessage(props) {
  const { currentUser } = useContext(UserContext)


  return (
    <>
      <div className={`${css.con} ${currentUser.user.uid == props.data.to ? css.recieved : css.sent}`}>
        <div className={`${css.msg} `}>
          <span>{props.data.msg}</span>
          <span>
            {/* {new Date(props.data.timestamp?.toDate()).toLocaleTimeString() + ' ' + new Date(props.data.timestamp?.toDate()).toDateString()} */}
          </span>
        </div>
      </div>
    </>



  )
}

export default SendMessage