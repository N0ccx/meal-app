import React from 'react'
import { Link } from 'react-router-dom'
import { vegan, balanced, vegetarian,  } from '../assets/images'

const DietPreferences = () => {
  return (
    <div className="flex flex-col justify-between items-center h-screen bg-gray-100">
    {/* Navbar */}
    <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-200">
      <Link to="/get-started" className="text-lg font-semibold text-gray-600">
        &#8592;
      </Link>
      <h2 className="text-lg font-bold text-gray-800">Diet Type</h2>
      <div className='flex flex-col items-center gap-1 mt-3 '>
        <div className='w-[360px] h-auto'>
          <img src={vegan} />
        </div>
      </div>
    </div>


    </div>
  )
}

export default DietPreferences
