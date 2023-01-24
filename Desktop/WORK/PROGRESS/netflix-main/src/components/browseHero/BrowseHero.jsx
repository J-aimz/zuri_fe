import css from './BrowseHero.module.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useState } from 'react';



function BrowseHero(props) {
  const [mute, setMute] = useState(false)

  function returnFixedNumOfWordsForOverview(str = '') {
    let newStr
    const text = str.split(' ')
    if (text.length > 15) {
      return  newStr = `${text.slice(0, 15).join(' ')}...`
    }
    
    return str
  }
  function returnFixedNumOfWordsForMovieTitle(str='') {
    // chk if string has a subtiltle which is seperated by ':' and return the first item 
    let title = str.split(':')

    return title[0]
    
  }

  return (
    <div className={css.con}>
      
      <h1>{returnFixedNumOfWordsForMovieTitle(props.movieTitle)}</h1>
      <p>{returnFixedNumOfWordsForOverview(props.overview)}</p>

      <div className={css.btns__con}>
        <div className={css.btn__con_LHS}>
          <button type='button' className={css.btn}>
            <PlayArrowIcon className={css.icon} />
            <span>Play</span>
          </button>
          <button type='button' className={css.btn}>
            <ErrorOutlineIcon className={css.icon} />
            <span>More Info</span>
          </button>
        </div>

        <div className={css.btn__con_RHS}>
          <button className={` ${css.circled}`} onClick={() =>props.setMute(prev => !prev)}>
            {
              !props.mute ? <VolumeUpIcon className={css.mute_controls} /> : <VolumeOffIcon className={css.mute_controls} />
            }
          </button>
          <button className={css.controls_btn}>pg 13</button>
        </div>

      </div>
    </div>
  )
}

export default BrowseHero