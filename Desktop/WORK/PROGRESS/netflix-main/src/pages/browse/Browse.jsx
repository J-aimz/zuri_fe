import { NavBar, BrowseHero, Row, Modal, Footer } from '../../components'
import css from './Browse.module.scss'
import {url_links} from '../../utils/API'
import movieTrailer from 'movie-trailer'
import ReactPlayer from 'react-player/youtube'
import { useContext, useEffect, useRef, useState } from 'react'
import { img_url } from '../../utils/API'
import { MovieDataContext } from '../../utils/MovieDataContext'



function Browse() {
  const {movieData} = useContext(MovieDataContext)
  const con = useRef('')
  const [movieTrailerLink, setMovieTrailerLink] = useState('')
  const [movie, setMovie] = useState({})
  const [movieIsReady, setMovieIsReady] = useState(false)
  const [muteVideo, setMuteVideo] = useState(true)
  const randomNum =  Math.floor(Math.random() * 20)


  useEffect(() =>{

    async function getmovie() {
      const res = await fetch(url_links.try)
      const data = await res.json()
      setMovie(data.results[randomNum])
    }
  
    getmovie()



  }, [])

  useEffect(() =>{
    
        
    async function getTrailer() {

      await movieTrailer( movie.original_title || null, {tmdbId: movie.id})
        .then(res => {
          setMovieTrailerLink(res)
        })
    }
  
    getTrailer()

  }, [movie])

  const {clientHeight,  clientWidth} = con.current

  const styles = {
    heroBg : {
      background: `url(${img_url + movie.backdrop_path || img_url + movie.poster_path})`
    },

    videoCon: {
      width: `${clientWidth}px`,
      height: `${clientHeight}px`,
      display: movieIsReady ? 'block' : 'none'
    }

  }


  return (
    <div className={css.con}>
      <Modal />
      <header className={css.con_header}>

        <div className={css.hero__con} ref={con} style={styles.heroBg}>
          <NavBar location='browse'/>
          <div style={styles.videoCon} className={css.video_con}>

            <ReactPlayer 
              url={movieTrailerLink || null} 
              width={clientWidth || '0'} 
              height={clientHeight || '0'} 
              volume={null}
              muted={muteVideo}
              controls={false}
              playing={movieData.playBrowseHeroVideo}
              onError={() =>setMovieIsReady(false)}
              onReady={() =>setMovieIsReady(true)}
              onEnded={() =>setMovieIsReady(false)}
            />

          </div>

          <BrowseHero img={movie.backdrop_path} movieTitle={movie.original_title || movie.title } overview={movie.overview} setMute = {setMuteVideo} mute={muteVideo} />

          <div className={css.bg_gradient}></div>
        </div>

      </header>

      <div className={css.rows_con}>
        <Row title='trending' url={url_links.try} />
        <Row title='action' url={url_links.action} />
        <Row title='adventure' url={url_links.adventure} />
        <Row title='animation' url={url_links.animation} />
        <Row title='comedy' url={url_links.comedy} />
        <Row title='crime' url={url_links.crime} />
        <Row title='documentry' url={url_links.documentry} />
        <Row title='drama' url={url_links.drama} />
        <Row title='fantasy' url={url_links.fantasy} />
        <Row title='history' url={url_links.history} />
        <Row title='horror' url={url_links.horror} />
        <Row title='romance' url={url_links.romance} />
        <Row title='scienceFiction' url={url_links.scienceFiction} />
        <Row title='thriller' url={url_links.thriller} />
        
      </div>


      <Footer />
    </div>
  )
}

export default Browse