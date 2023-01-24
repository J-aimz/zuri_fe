import { Footer, NavBar } from '../../components'
import css from './SignupFour.module.scss'
import mastercard from '../../assets/mastercard.svg'
import verve from '../../assets/verve.png'
import visa from '../../assets/visa.svg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LockResetIcon from '@mui/icons-material/LockReset';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom'

function Signupfour() {
  return (
    <>
      <NavBar location='signup' />
      <div className={css.con}>
        <div className={`${css.content__con} section-padding`}>
          <div className={css.icon_con}>
              <LockResetIcon className={css.icon_one}/>
          </div>
          <div>
            <small className={css.steps}>step 3 of 3</small>
            <h1>Choose how to pay</h1>
            <p>
              Your payment is encrypted and you can change how you pay anytime.
            </p>
            <p className={css.mt}><strong>Secure for peace of mind.</strong></p>
            <p><strong>Cancel easily online.</strong></p>

            <small className={css.aling_right}>
              <span>End-to-end encrypted</span>
              <LockIcon className={css.icon_two}/>
            </small>
            <Link to={'/browse'} className={css.link}>
              <div>
                <span>Credit or Debit Card</span>
                <div>
                  <img src={visa} alt="visa" />
                  <img src={mastercard} alt="mastercard" />
                  <img src={verve} alt="verve" />
                </div>
              </div>
              <ArrowForwardIosIcon className={css.icon_three}/>
            </Link>
          </div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>

    </>
  )
}

export default Signupfour