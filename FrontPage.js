import React from 'react'
import '../css/frontPage.css'
import art from '../assets/svg2.png'
import FrontPageHeader from '../components/FrontPageHeader'

const FrontPage = () => {
  return (
    <>
      <FrontPageHeader />
      <div>
        <div className='content'>
          Get Medicines 24/7<br />delivered at home<br />at reasonable rates.
        </div>
        <img src={art} alt='graphic' className='image' />
      </div>
    </>
  )
}

export default FrontPage
