import React from 'react'
import { useNavigate } from 'react-router-dom'

function Product({product}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`products/${product?.id}`)} className="w-[440px] p-5 mX-5 border rounded-md relative cursor-pointer">
      <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">{product?.price} TL</div>
      <img src={product?.image} alt="" className='w-[200px] h-[200px] object-cover m-auto'/>
      <div className='text-center px-3 mt-3 text-xl font-bold'>{product?.title}</div>
    </div>

  )
}

export default Product