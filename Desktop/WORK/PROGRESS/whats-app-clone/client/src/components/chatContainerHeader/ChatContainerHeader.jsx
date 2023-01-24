import css from './ChatContainerHeader.module.scss'
import img from '../../assets/img.jpg'

function ChatContainerHeader() {
  return (
    <div className={css.con}>
        <img src={img} alt="contact img" />
    </div>
  )
}

export default ChatContainerHeader