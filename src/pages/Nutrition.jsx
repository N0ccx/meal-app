import React from 'react'
import Navbar from '../components/app/TopNav'
import { navItems } from '../assets/images'

const Nutrition = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
    <Navbar label="Nutrition" tokens={15}  />
    </div>
  )
}

export default Nutrition
