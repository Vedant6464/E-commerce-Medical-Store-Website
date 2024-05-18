import React, { useState } from 'react'
import art1 from '../assets/art1.jpg'
import '../css/signUp.css'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import FrontPageHeader from '../components/FrontPageHeader'

const Login = () => {
  const { signIn } = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signIn(email, password)
      navigate('/LogInCustomer')
    } catch (e) {
      setError(e.message)
      alert(e.message)
      console.log(e.message)
    }
  }
  return (
    <>
      <FrontPageHeader />
      <div className='container'>
        <img src={art1} alt='' className='signUpPageImage' />
        <form className='signupform' onSubmit={handleSubmit}>
          <label className='headSignUp'>Login</label><br /><br />
          <label>Enter Email ID</label><br />
          <input id='emailid' type='email' className='input1' placeholder='Enter Email id' onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
          <label>Enter  Password</label><br />
          <input id='password' type='password' className='input1' placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} />
          <input id='signup' type='submit' className='submitbtn' value='Log In' />
        </form>
      </div>
    </>
  )
}

export default Login
