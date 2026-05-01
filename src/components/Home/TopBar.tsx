import React from 'react'

const TopBar = () => {
  return (
    <div className='bg-black hidden w-full text-[13px] font-medium h-fit py-2 text-white lg:flex justify-between px-10 '>
        <p className='uppercase'>Free Shipping on Nepal orders over $50</p>
        <div className='flex items-center gap-2'>
        <button>Join Us</button>
        <div>| </div>
        <button>Login</button>
        </div>
    </div>
  )
}

export default TopBar