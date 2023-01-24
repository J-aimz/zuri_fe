import css from './Contact.module.scss'
import img from '../../assets/img.jpg'
import { useContext, useEffect, useState } from 'react'
import { GetContactsContext } from '../../utils/contexts/GetContactsContext'
// import uselocalstorrage from '../../utils/customHooks/useLocalStorrage'



function Contact({ id, value }) {

  const [imgURL, setImgURL] = useState('')

  // sending data to context
  const { setContact, contact } = useContext(GetContactsContext)


  function handleClickEvent(id, value, imgURL) {

    setContact(prev => ({
      ...prev,
      id: id,
      contactName: value.displayName,
      imgURL: value.photoUrl || imgURL || img,
      showChatPage: true,
      smToggleDisplay: true
    }))

  }


  return (
    <div className={css.con} onClick={() => handleClickEvent(id, value, imgURL)} >
      <div className={css.img__con}>
        <img src={value.photoUrl || imgURL || img} alt="contact img" />
      </div>
      <div className={css.msg__con}>
        <div className={css.msg__LHS}>
          <h3>{value.displayName}</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact