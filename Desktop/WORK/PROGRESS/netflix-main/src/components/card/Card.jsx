import css from './Card.module.scss'
import {img_url} from '../../utils/API'
import { useContext } from 'react'
import { MovieDataContext } from '../../utils/MovieDataContext'

function Card(props) {
  const { dispatch } = useContext(MovieDataContext)
  
  return (
    <div className={css.con} onClick={() =>{
      dispatch({type: 'id', payload: props.id });
      dispatch({type: 'openModal', payload: true});
      dispatch({type: 'browseHeroVdieo', payload: false})
    }}>
      <div className={css.content}>
        <img src={`${img_url}${props.img}`} alt="" />
      </div>
    </div>
  )
}

export default Card