import css from './SignupOne.module.scss'
import {Footer, NavBar} from '../../components'
import { useContext, useState } from 'react'
import { UserContext } from '../../utils/UserContext'
import { Link } from 'react-router-dom'

function SignupOne() {
  const { state, dispatch } = useContext(UserContext)


  function handleForm(e) {
    e.preventDefault()
    
  }

return (
  <>
      <NavBar location={'signup'} />
      <div className={css.con}>
        <form onSubmit={handleForm} className={`${css.con__content} section-padding `}>
          <small className={css.steps}>step 1 of 3</small>

          <h1>
            Welcome back! <br />
            Joining Netflix is easy.
          </h1>
          <p>Enter your password and you'll be watching in no time.</p>

          <p>Email</p>
          <p>{state.email}</p>

          <div className={css.input_con}>
            <input 
              type="password" 
              name="password" 
              id="password" 
              onChange={(e) =>dispatch({type: 'password', payload: e.target.value})}
              value={state.password}
              placeholder='Enter your password'
            />
            {/* <small className={`notification`}>Password is required!</small> */}
            <a href='#' className={css.link}>Forgot your password?</a>
            <Link to={'/signup'} className={`button`}>Next</Link>
          </div>

        </form>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default SignupOne