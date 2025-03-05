import React,{ useState } from 'react'
import Navbar from '../components/NavBar'

const Pantry = () => { 
  return (
    <div className='flex flex-col bg-white '>

      <Navbar label="My Store/Pantry" link="/kitchen" />
    </div>
  )
}

export default Pantry
