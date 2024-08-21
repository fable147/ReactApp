import React, { useEffect } from 'react'
import { getCartTotal, removeFromCart } from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

function CartComp({cart}) {
  const dispatch = useDispatch()
  return (
    <div className='my-10 flex items-center justify-between'>
        <img src={cart?.image } alt='' className='w-[150px] h-[150px] object-cover'/>
        <div className='w-[476px]'>
            <div className='text-xl'>{cart?.title}</div>
            <div>{cart?.description}</div>
        </div>
        <div className='font-bold text-2xl'>{cart?.price} TL ({cart.quantity})</div>
        <div className='bg-red-500 text-white w-[150px] text-2xl cursor-pointer h-16 items-center justify-center rounded-md flex' onClick={()=>dispatch(removeFromCart(cart?.id))}>Ürünü Sil</div>
    </div>
  )
}

export default CartComp