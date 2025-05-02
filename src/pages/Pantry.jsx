import React,{ useState } from 'react'
import Navbar from '../components/NavBar'

const Pantry = () => { 
  return (
    <div className='flex flex-col h-screen bg-white '>

      <Navbar label="My Store/Pantry" link="/kitchen" />

      <p className='items-center justify-between mt-4'>Enter food item you currently own to your pantry in order for us to incorporate items into your meals</p>
    </div>
  )
}

export default Pantry
