import { Footer, NavBar } from '../../components'
import css from './SignupThree.module.scss'
import DoneIcon from '@mui/icons-material/Done';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import TvIcon from '@mui/icons-material/Tv';
import { Link } from 'react-router-dom';

function SignupThree() {
 
  return (
    <>
      <NavBar location='signup' />
      <div className={css.con}>
        <div className={`${css.content__con} section-padding`}>
          <small>step 2 of 3</small>
          <h1>Choose the plan that's right for you</h1>
          <ul>
            <li>
              <span>
                <DoneIcon className={css.icons} />
              </span>
              <span>Watch all you want. Ad-free.</span>
            </li>
            <li>
              <span>
                <DoneIcon className={css.icons} />
              </span>
              <span>Recommendations just for you.</span>
            </li>
            <li>
              <span>
                <DoneIcon className={css.icons} />
              </span>
              <span>Change or cancel your plan anytime.</span>
            </li>
          </ul>
          <div className={css.plan__selection_con}>

            <div className={css.top_con}>
              <div className={css.gap_top}></div>

              <div className={css.plan_btn}>
                <span>mobile</span>
              </div>
              <div className={css.plan_btn}>
                <span>basic</span>
              </div>
              <div className={css.plan_btn}>
                <span>standard</span>
              </div>
              <div className={css.plan_btn}>
                <span>premium</span>
              </div>
            </div>

            <div className={css.body}>
              <div className={css.body__item_con}>
                <p className={css.gap}>Monthly price</p>
                <div className={css.features}>
                  <span> &#8358; 1,200</span>
                  <span> &#8358; 2,900</span>
                  <span> &#8358; 3,600</span>
                  <span> &#8358; 4,400</span>
                </div>
              </div>

              <div className={css.body__item_con}>
                <p className={css.gap}>Video quality</p>
                <div className={css.features}>
                  <span>Good</span>
                  <span>Good</span>
                  <span>Better</span>
                  <span>Best</span>
                </div>
              </div>

              <div className={css.body__item_con}>
                <p className={css.gap}>Resolution</p>
                <div className={css.features}>
                  <span>480p</span>
                  <span>720p</span>
                  <span>1080p</span>
                  <span>4K+HDR</span>
                </div>
              </div>


              <div className={css.body__item_con}>
                <p className={css.gap}>Devices you can use to watch</p>
                <div className={css.features}>
                  <span><PhoneIphoneIcon className={css.icon} /> <span>Phone</span></span>
                  <span><PhoneIphoneIcon className={css.icon} /> <span>Phone</span></span>
                  <span><PhoneIphoneIcon className={css.icon} /> <span>Phone</span></span>
                  <span><PhoneIphoneIcon className={css.icon} /> <span>Phone</span></span>
                </div>
              </div>

              
              <div className={css.body__item_con}>
                <p className={css.gap}></p>
                <div className={css.features}>
                  <span><TabletAndroidIcon className={css.icon} /> <span>Tablet</span></span>
                  <span><TabletAndroidIcon className={css.icon} /> <span>Tablet</span></span>
                  <span><TabletAndroidIcon className={css.icon} /> <span>Tablet</span></span>
                  <span><TabletAndroidIcon className={css.icon} /> <span>Tablet</span></span>
                </div>
              </div>

              <div className={css.body__item_con}>
                <p className={css.gap}></p>
                <div className={css.features}>
                  <span></span>
                  <span><ComputerIcon className={css.icon} /> <span>Computer</span></span>
                  <span><ComputerIcon className={css.icon} /> <span>Computer</span></span>
                  <span><ComputerIcon className={css.icon} /> <span>Computer</span></span>
                </div>
              </div>

              <div className={css.body__item_con}>
                <p className={css.gap}></p>
                <div className={css.features}>
                  <span></span>
                  <span><TvIcon className={css.icon} /> <span>TV</span></span>
                  <span><TvIcon className={css.icon} /> <span>TV</span></span>
                  <span><TvIcon className={css.icon} /> <span>TV</span></span>
                </div>
              </div>

            </div>

            <small>
              HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
            </small>

            <small>
              Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
            </small>

            <div className={css.btn_con}>
              <Link to={'/signup/paymentPicker'} className={`button`}>Next</Link>
            </div>

          </div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  )
}

export default SignupThree