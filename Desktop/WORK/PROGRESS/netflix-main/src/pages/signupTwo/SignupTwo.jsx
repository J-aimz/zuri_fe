import { Footer, NavBar } from '../../components'
import css from './SignupTwo.module.scss'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';

function SignupTwo() {
  return (
    <>
      <NavBar location='signup' />
      <div className={css.con}>
        <div className={`${css.con__content} section-padding`}>
          <div className={css.icon_con}>
            <CheckCircleOutlineIcon className={`${css.icon} ${css.icon_one}`} />
          </div>
          <small className={css.steps}>step 2 of 3</small>
          <h1>Choose your plan.</h1>
          <ul>
            <li>
              <span>
                <DoneIcon className={`${css.icon} `} />
              </span>
              <span>No commitments, cancel anytime.</span>
            </li>
            <li>
              <span>
                <DoneIcon className={css.icon} />
              </span>
              <span>Everything on Netflix for one low price.</span>
            </li>
            <li>
              <span>
                <DoneIcon className={css.icon} />
              </span>
              <span>No ads and no extra fees. Ever.</span>
            </li>
          </ul>

          <Link to={'/signup/platform'} className='button'>Next</Link>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default SignupTwo