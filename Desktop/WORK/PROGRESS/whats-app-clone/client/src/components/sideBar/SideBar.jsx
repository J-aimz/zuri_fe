import React, { memo, useContext, useEffect, useState } from 'react';
import css from './SideBar.module.scss'
import { Contact, Header } from '../'
import db from '../../firebase.config';
// import { collection, getDocs } from "firebase/firestore";

import { collection, query, onSnapshot, where } from "firebase/firestore";
import { UserContext } from '../../utils/contexts/UserContext';
import { GetContactsContext } from '../../utils/contexts/GetContactsContext';






function SideBar() {

  const [contacts, setContacts] = useState([])
  const { currentUser } = useContext(UserContext)
  const { contact } = useContext(GetContactsContext)
  const MemoedContact = memo(Contact)


 

  useEffect(() => {

    async function getdb() {
      const q = query(collection(db, "test"), where("id", "!=", `${currentUser.user.uid}`));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          setContacts(prev => ([...prev, {
            id: doc.id,
            value: doc.data()
          }]))
        });
      });
    }
    getdb()

    

  }, [contact.smToggleDisplay])


  return (
    <div className={css.con}>
      <div>
        <Header location={'side'} />
      </div>
      <div className={css.contact__list_con}>
        {
          contacts.map((el, ind) => (
            <MemoedContact key={ind} id={el.id} value={el.value} />
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(SideBar)