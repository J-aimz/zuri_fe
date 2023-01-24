import css from './Welcome.module.scss'
import img from '../../assets/welcome.png'




function Welcome() {
  return (
    <div className={css.con}>
        <div>
            <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default Welcome


