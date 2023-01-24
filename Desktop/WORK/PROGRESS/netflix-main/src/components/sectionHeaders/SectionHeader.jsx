import css from './SectionHeader.module.scss'

function SectionHeader(props) {
  return (
    <div className={css.con}>
        <h2>{props.header}</h2>
        <h5>{props.subHead}</h5>

    </div>
  )
}

export default SectionHeader