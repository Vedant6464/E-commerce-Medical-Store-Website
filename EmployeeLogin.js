import React from 'react'
import art1 from '../assets/art1.jpg'
import '../css/signUp.css'
import { useNavigate } from 'react-router-dom'
import FrontPageHeader from '../components/FrontPageHeader'
const EmployeeLogin = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = document.getElementById('emailid').value
    const pass = document.getElementById('password').value
    if (email === 'employee@gmail.com' && pass === 'employee') {
      navigate('/EmployeeRoute')
    }
  }
  return (
    <>
      <FrontPageHeader />
      <div className='container'>
        <img src={art1} alt='' className='signUpPageImage' />
        <form className='signupform' onSubmit={handleSubmit}>
          <label className='headSignUp'>Emlpoyee Login</label><br /><br />
          <label className='signuplabel'>Enter Email ID</label><br />
          <input id='emailid' type='email' className='input1' placeholder='Enter Email id' /><br /><br />
          <label>Enter  Password</label><br />
          <input id='password' type='password' className='input1' placeholder='Enter Password' />
          <input id='signup' type='submit' className='submitbtn' value='Log In' />
        </form>
      </div>
    </>
  )
}

export default EmployeeLogin
