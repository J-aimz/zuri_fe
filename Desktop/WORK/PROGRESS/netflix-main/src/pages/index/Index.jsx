import { useContext, useEffect, useState } from 'react';
import { Accordion, Footer, Hero, NavBar, SectionHeader } from '../../components'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// imgs
import css from './Index.module.scss'
import vid from '../../assets/video-tv.mp4'
import img from '../../assets/tv.png'
import kidsImg from '../../assets/kids.png'
import mobile from '../../assets/mobile.jpg'
import boxShot from '../../assets/boxshot.png'
import download from '../../assets/download-icon.gif'
import { UserContext } from '../../utils/UserContext';


function Index() {
  const [locale, setLocal] = useState({})
  const { state, dispatch } = useContext(UserContext)


  useEffect(() =>{
    async function getLocale() {
      const res = await fetch('http://ip-api.com/json')
      const data = await res.json()
      setLocal(data.countryCode)
    }

    getLocale()
  }, [])

  return (
    
    <div className={css.con}>
      <header>
        <div className={css.overlay}>
          <NavBar location='index'/>
          <Hero locale={locale} />
        </div>
      </header>

      <div>

        {/* section one */}
        <section className={css.section__one}>
          <div className={`${css.setion__one_con} index-sections`}>
            <SectionHeader header='Enjoy on your TV.' subHead='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' />

            <div className={css.img_one_con}>
              <img src={img} alt="tv" />
              <video 
                src={vid} 
                type='video/mp4'
                loop
                controls={false}
                muted
                autoPlay
              />

            </div>
          </div>

        </section>

        {/* section two */}
        <section className={`${css.section_two} `}>
          <div className={`${css.section_two_con} index-sections`}>
            <div className={css.img_con_section_two}>

              <img src={mobile} alt="mobile" className={css.mobile} />

              <div className={css.float_box}>

                <div className={css.float_box_LHS}>
                  <img src={boxShot} alt="boxShot" className={css.boxshot} />
                  <span>
                    <span>Stranger Things</span>
                    <span>Downloading...</span>
                  </span>
                </div>

                <img src={download} alt="download svg" className={css.download} />
              </div>

            </div>

            <SectionHeader header='Download your shows to watch offline.' subHead='Save your favorites easily and always have something to watch.' />
          </div>
        </section>

        {/* section three */}
        <section className={`${css.section_three} index-sections`}>
          <div className={css.section_three_con}>
            <SectionHeader header='Watch everywhere.' subHead='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.' />
          </div>
        </section>

        {/* section four*/}
        <section className={`${css.section_four} index-sections`}>
          <div className={css.section_four_con}>
            <div className={css.img__con_sec_four}>
              <img src={kidsImg} alt="kids" />
            </div>
            <SectionHeader header='Create profiles for kids.' subHead='Send kids on adventures with their favorite characters in a space made just for them—free with your membership.' />

          </div>
        </section>

        {/* section five (FAQ) */}
        <section className={`${css.section_five} index-sections`}>
          <div className={css.section_five_con}>
            <h2>Frequently Asked Questions</h2>

            <div className={css.accordion}>
              <Accordion />
            </div>

            <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
            <div className={css.inputs_con}>
              <input 
                type="email" 
                value={state.email}
                name='email'
                placeholder='Email address'
                onChange={(e) =>dispatch({type: 'email', payload: e.target.value})}
              />

              <Button variant="contained" className={css.btn}>
                <span>Get Started</span> 
                  <ArrowForwardIosIcon className={css.icon}/>

              </Button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>


    
  )
}

export default Index