import { useState } from 'react'
import './App.scss'
import { Browse, Index, SignupFour, SignupOne, SignupThree, SignupTwo } from './pages'
import MovieDataContextProvider from './utils/MovieDataContext' 
import { Routes, Route } from 'react-router-dom'
import UserContextProvider from './utils/UserContext'

function App() {

  return (
    <div className="App">
      <UserContextProvider>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/signup/password' element={<SignupOne /> } />
          <Route path='/signup' element={<SignupTwo />} />
          <Route path='/signup/platform' element={<SignupThree />} />
          <Route path='/signup/paymentPicker' element={<SignupFour />} />
          {/* <Route path='/signup/creditoption' element={to payment implementation} /> 
          */}

          <Route path='/browse' element={
            <MovieDataContextProvider>
              <Browse />
            </MovieDataContextProvider>
          }/>

          <Route path='*' element={<Index />} />
        </Routes>
       
      </UserContextProvider>
    </div>
  )
}

export default App
