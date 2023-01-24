import { useContext, useEffect, useRef, useState } from 'react'
import css from './Modal.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import {MovieDataContext} from '../../utils/MovieDataContext';
import { img_url } from '../../utils/API';
import movieTrailer from 'movie-trailer'
import ReactPlayer from 'react-player/youtube'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';



function Modal() {
  const { movieData, dispatch } = useContext(MovieDataContext)
  const [movieIsReady, setMovieIsReady] = useState(false)
  const [movieTrailerURL, setMovieTrailerURL] = useState('')
  const [mute, setMute] = useState(false)
  
  console.log(movieData.data.original_title)
  const videoContainer = useRef('')
  const {clientHeight, clientWidth} = videoContainer.current
  useEffect(() =>{

    if(movieData.data != []) {
      async function getmovieTrailer() {
        await movieTrailer(null, {tmdbId: movieData.data.id})
          .then(res => setMovieTrailerURL(res))
          
      }

      getmovieTrailer()
    }


  }, [movieData.data])

  const styles = {
    videoContainer: {
      width: clientWidth,
      heigth: clientHeight
    }
  }

  

  return (
    // modal container
    <div className={`${css.con} animate-modal`} onClick={() =>{
      dispatch({type: 'openModal', payload: false});
      dispatch({type: 'browseHeroVdieo', payload: true})
    }} style={{visibility : movieData.openModal? 'visible' :  'hidden'}}>


      {/* modal content */}
      <div className={css.content} onClick={(e) =>{e.stopPropagation()}}>

        {/* close btn */}
        <CloseIcon className={css.close_icon} onClick={() =>{
          dispatch({type: 'openModal', payload: false})
          dispatch({type: 'browseHeroVdieo', payload: true})
        }} />

        {/* video / img container */}
        <div className={css.head} ref={videoContainer}>

          {/* video con */}
          <div className={css.video_con} style={{width:`${clientWidth }px`, height: `${clientHeight}px`, display: movieIsReady ? 'block' : 'none'}}>
            <ReactPlayer 
              url={movieTrailerURL || null} 
              width={clientWidth} 
              height={clientHeight} 
              volume={null}
              controls={false}
              muted={mute}
              playing={!movieData.playBrowseHeroVideo}
              onReady={() =>setMovieIsReady(true)}
              onEnded={() =>setMovieIsReady(false)}
            />
          </div>
          {
            !movieIsReady &&
            <img src={img_url + movieData.data.backdrop_path || movieData.data.poster_path} alt={movieData.data.original_title + " poster"} />
          }

          <div className={css.head__info}>
            <h3>{movieData.data.original_title}</h3>
            <div className={css.btn_con}>
              <div className={css.btn_con__LHS}>
                <button type='button' className={css.btn}>
                  <PlayArrowIcon className={css.btn__play_icon} />
                  <span>play</span>
                </button>

                <AddCircleOutlineIcon className={css.icons} />

                <RecommendOutlinedIcon className={css.icons} />
              </div>

              <button className={` ${css.circled}`} onClick={() =>setMute(prev => !prev)}>
                {
                  !mute ? <VolumeUpIcon className={css.mute_controls} /> : <VolumeOffIcon className={css.mute_controls} />
                }
              </button>

            </div>
          </div>

        </div>

        <div className={css.body}>
          <div className={css.body_LHS}>
            <div className={css.body_LHS_top}>
              <span>{(movieData.data.vote_average * 10).toFixed(0) }% match</span>
              <span>{movieData.data.adult ? '+18' : '+13'}</span>
            </div>

            <div>
              <p>
                {movieData.data.overview}
              </p>
            </div>
          </div>
          <div className={css.body_RHS}>

            <div className={css.features}>
              <span>cast: </span>
              <span>
                {
                  movieData.castDetails  &&
                  movieData.castDetails[0].name + ', ' + movieData.castDetails[1].name  + ', ' + movieData.castDetails[2].name 
                }
              </span>
            </div>

            <div className={css.features}>
              <span>Genres: </span>
              <span>
                {
                  movieData.data.genres && movieData.data.genres.map(el => el.name).join(', ')
                }
              </span>
            </div>

          </div>
        </div>
          
      </div>
    </div>
  )
}

export default Modal