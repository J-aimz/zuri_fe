import css from './NavBar.module.scss'
import logo from '../../assets/logo.png'
import Button from '@mui/material/Button';

function NavBar(props) {

  const styles = {
    signup: {
      position: 'relative',
    }
  }
  return (
    <nav className={`${css.con} ${props.location != 'signup' && css.nav_bg }` } style={ props.location == 'signup' && styles.signup || {}}>
      <a href="#">
        <img src={logo} alt="netflix logo" />
      </a>

      <div className={css.signup}>
        {/* signup pages */}
        {
          props.location == 'signup' && <a href='#'>Sign in</a>
        }
        
        {/* home page */}
        {
          props.location == 'index' && 
          <Button variant="contained" className={css.btn}>Sign in</Button>

        }
      </div>

    </nav>
  )
}

export default NavBar

