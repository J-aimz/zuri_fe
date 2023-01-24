import { useContext, useState } from 'react'
import css from './Hero.module.scss'
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { UserContext } from '../../utils/UserContext';

function Hero(props) {
  const { state, dispatch } = useContext(UserContext)

  return (
    <>
      <div className={css.hero__con}>
        <div className={css.hero__content}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h5>
            Ready to watch? Enter your email to create or restart your membership.
          </h5>
          <div className={css.inputs_con}>
            <input 
              type="email" 
              value={state.email}
              name='email'
              placeholder='Email address'
              onChange={(e) =>dispatch({type: 'email', payload: e.target.value})}
              required={true}
            />

            <Link to={'/signup/password'} className={css.btn}>
              <span>Get Started</span> 
                <ArrowForwardIosIcon className={css.icon}/>

            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero