import css from './SideBarHeader.module.scss'
import img from '../../assets/img.jpg'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SideBarHeader({location}) {
  return (
    <div className={css.con}>
      <img src={img} alt="user img" />
      <div className={css.icons__con}>
          {
            location === 'side' ?
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

export default SideBarHeader