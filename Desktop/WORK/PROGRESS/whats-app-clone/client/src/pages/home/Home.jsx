import { accordionActionsClasses } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import css from './Home.module.scss'
import GoogleIcon from '@mui/icons-material/Google';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from '../../utils/contexts/UserContext';

import db from '../../firebase.config';
import { doc, setDoc, collection, getDocs } from "firebase/firestore";





function Home() {
  const { dispatchUser } = useContext(UserContext)
  const [idVerification, setIdVerification] = useState(null)

  // google auth funx
  function handdleGoogleSignup() {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        setUserIntoDb(result.user)

      }).catch((error) => {
        alert('Ooops somthing went wrong refresh the page and try again')
      });
  }

  function setUserIntoDb(user) {
    checkIfUserAlreadyExist(user.uid)

    const setter = async() => {
      
      if (idVerification) {
        dispatchUser({ type: 'login', payLoad: user })
      } else if (!idVerification) {
        await setDoc(doc(db, "test", user.uid), {
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          id: user.uid
        })
        dispatchUser({ type: 'login', payLoad: user })
      }

    }

    setter()


  }

  async function checkIfUserAlreadyExist(uid) {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      if (doc.id == uid) {
        setIdVerification(prev => true)
        return
      } 
    });
  }

  return (
    <div className={css.con}>
      <nav className={css.nav}>

      </nav>

      <div className={css.body}>
        <div className={css.LHS}>
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, aspernatur.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere fuga soluta atque doloribus, reprehenderit amet neque mollitia debitis ipsum est recusandae ad vitae distinctio voluptatibus praesentium quisquam assumenda ullam?
            </p>
          </div>
        </div>
        <div className={css.RHS}>
          <div className={css.input__con}>
            <div>
              <button type='buttton' className={css.signuup__btn} onClick={handdleGoogleSignup}>
                <GoogleIcon /> <span>Sign in with Google</span>
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home