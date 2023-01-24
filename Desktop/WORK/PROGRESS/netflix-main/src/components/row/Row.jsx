import { useEffect, useRef, useState } from 'react'
import Card from '../card/Card'
import css from './Row.module.scss'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

  

function Row(props) {
  const slider = useRef(null)
  const [movieList, setMovieList] = useState([])
  const [showBtns, setShowBtns] = useState(false)
  const [showLeftBtn, setShowLeftBtn] = useState(false)

  console.log(props.url)
  
  useEffect(() =>{
    async function getData() {
      const res = await fetch(props.url)
      const data = await res.json()
      setMovieList(prev => data.results)
    }

    
    getData()
  }, [props.url])

  function handleSlider(direction) {
    const {scrollLeft, clientWidth} = slider.current
    const scrollTo = direction === 'right'?
       scrollLeft + clientWidth - 48 : 
       scrollLeft - clientWidth 
   
       slider.current.scrollTo({left : scrollTo, behaviour : 'smooth'})

  }

  return (
    <div className={css.con}>
      <h5>{props.title}</h5>
      <div className={css.slider_con} onMouseEnter={() =>setShowBtns(true)} onMouseLeave={() =>setShowBtns(false)}>

        {
          showBtns &&
          <button className={`${css.btn} ${css.left_btn}`} style={{display: showLeftBtn ? 'block' : 'none'}} onClick={() =>handleSlider('left')}>
            <ArrowBackIosNewIcon className={css.arrow_icon}/>
          </button>
        }


        <div className={css.slider} ref={slider} >

          {
            movieList.map((el, ind) =>(
              <Card key={ind} img={el.backdrop_path || el.poster_path} id={el.id}  />
            ))
          }

        </div>

        {
          showBtns &&
          <button className={`${css.btn} ${ css.rigth_btn}`} onClick={() => {
            setShowLeftBtn(prev =>true);
            handleSlider('right')
          }}>
            <ArrowForwardIosIcon className={css.arrow_icon} />
          </button>
        }


      </div>



    </div>
  )
}

export default Row