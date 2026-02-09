import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center ml-25 mt-5'>
        <div>
            <h3 className='text-2xl text-[#F5F5F5] italic tracking-widest font-semibold'>pixel<span className='text-[#E85D04]/90 italic '>Perfection</span></h3>
            
        </div>
        <div className='flex justify-between w-100'>
            <p className='text-[#F5F5F5] text-xl hover:border-b-4 hover:border-[#E85D04] '>Portfolio</p>
            <p className='text-[#F5F5F5] text-xl hover:border-b-4 hover:border-[#E85D04]' >About Us</p>
            <p className='text-[#F5F5F5] text-xl hover:border-b-4 hover:border-[#E85D04]' >Contact</p>
        </div>
        <div className='mr-25' >
            <button className='bg-[#E85D04] text-[#F5F5F5] p-3 text-xl rounded-xl hover:text-black hover:bg-[#F5F5F5]'>Book Now</button>
        </div>
        
    </div>
  )
}

export default NavBar