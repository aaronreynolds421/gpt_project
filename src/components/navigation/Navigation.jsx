import React from 'react'
import {RiMenuLine, RiCloseLin } from 'react-icons/ri'

import './navigation.css'

const Navigation = () => {
  return (
    <div className = "gpt4__navbar">
      <div className='gpt4__navbar-links'>
      <div className='gpt4__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div> 
      </div>
    </div>
  )
}

export default Navigation