import css from './Footer.module.scss'

function Footer() {
  return (
    <div className={css.con}>

      <div className={css.content}>
          <div className={css.socials}>

          </div>
          <div className={css.links_con}>
            <div className={css.links_con__sub}>
              <a href="#">audio description</a>
              <a href="#">investor relations</a>
              <a href="#">legal notices</a>
            </div>

            <div className={css.links_con__sub}>
              <a href="#">help center</a>
              <a href="#">jobs</a>
              <a href="#">cookie preferences</a>
            </div>

            <div className={css.links_con__sub}>
              <a href="#">gift card</a>
              <a href="#">terms of use</a>
              <a href="#">corporate infomation</a>
            </div>

            <div className={css.links_con__sub}>
              <a href="#">media center</a>
              <a href="#">privacy</a>
              <a href="#">contact us</a>
            </div>
          </div>

          <div className={css.foot}>
            <button>sevice code</button>
            <span>	&#169; 1997-2023 Neflix-clone, inc</span>

          </div>
      </div>

    </div>
  )
}

export default Footer