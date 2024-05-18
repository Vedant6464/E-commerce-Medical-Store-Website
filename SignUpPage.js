import React, { useState } from 'react'
import art1 from '../assets/art1.jpg'
import '../css/signUp.css'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import FrontPageHeader from '../components/FrontPageHeader'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { createUser } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/LogInCustomer')
      window.location.reload(false)
    } catch (e) {
      setError(e.message)
      alert(e.message)
      console.log(e.message)
      console.log(e)
    }
  }
  return (
    <>
      <FrontPageHeader />
      <div className='container'>
        <img src={art1} alt='' className='signUpPageImage' />
        <form className='signupform' onSubmit={handleSubmit}>
          <label className='headSignUp'>Sign Up</label><br /><br />
          <label>Enter Email ID</label><br />
          <input id='emailid' type='email' className='input1' placeholder='Enter Email id' onChange={(e) => setEmail(e.target.value)} /><br /><br />
          <label>Enter  Password</label><br />
          <input id='password' type='password' className='input1' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
          <button id='signup' type='submit' className='submitbtn'>Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default SignUpPage
