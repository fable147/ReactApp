import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

function Navbar() {
  
  return (
    <div className='flex items-center justify-between my-5 cursor-pointer'>
    <NavbarLeft/>
    <NavbarRight/>
    </div>
  )
}

export default Navbar