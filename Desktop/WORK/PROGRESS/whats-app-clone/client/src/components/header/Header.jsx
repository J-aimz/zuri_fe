import css from './Header.module.scss'
import img from '../../assets/img.jpg'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext } from 'react';
import { UserContext } from '../../utils/contexts/UserContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { GetContactsContext } from '../../utils/contexts/GetContactsContext';


function Header(props) {
  const { currentUser } = useContext(UserContext)
  const { setContact } = useContext(GetContactsContext)

  return (
    <div className={css.con}>
      <div className={css.contact__img_name}>
        {props.location === 'chat' && <ArrowBackIosIcon className={css.backArrow} onClick={() => setContact(prev => ({...prev, smToggleDisplay: false}))} /> }
        <img src={props.location == 'side' ?  currentUser.user.photoURL : props.imgURL || img} alt="" />
        <p>{props.contact || currentUser.user.displayName}</p>
      </div>
      <div className={css.icons__con}>
          {
            props.location === 'side' ?
            <>
              <DonutLargeIcon className={css.icons} />
              <SpeakerNotesIcon className={css.icons} />
              <MoreVertIcon className={css.icons} />
            </>
            :
            <MoreVertIcon className={css.icons} />

          }

      </div>
    </div>
  )
}

export default Header