import React from 'react'
import {useNavigate} from 'react-router-dom'


function NavbarLeft() {
  const navigate = useNavigate();
  return (
    <div className='text-5xl'  onClick={()=>navigate('/')}>ShopZon</div>
  )
}

export default NavbarLeft 