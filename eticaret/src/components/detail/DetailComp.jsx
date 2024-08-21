import React,{useState,useEffect}from 'react'
import { useDispatch } from 'react-redux'
import {addtoCart} from "../../redux/cartSlice"

function DetailComp({productDetail}) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)
    const [showMessage, setShowMessage] = useState(false);
    const increment = () => {
        if(quantity < productDetail?.rating?.count)
        setQuantity(quantity+1)
    }
    const decrement = () => {
        if(quantity>0) setQuantity(quantity-1)
        
    }
    const addBasket = () =>{
        const productObj = {id:productDetail?.id,title:productDetail?.title,image:productDetail?.image,price:productDetail?.price,quantity:quantity};
        console.log(productObj);
        dispatch(addtoCart(productObj))

        setShowMessage(true);
    
        // Hide the message after 3 seconds
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
    }
    useEffect(()=>{
        console.log(productDetail)
    },[])
  return (
    <div className='flex gap-10 my-10'>
        <img src={productDetail?.image} alt='' className='w-[700px] h-[500px] object-cover' />
        <div className=''>
            <div className='text-4xl font-bold'>{productDetail?.title}</div>
            <div className='my-2 text-2xl'>{productDetail?.description}</div>
            <div className='my-2 text-xl text-red-500'>Rating : {productDetail?.rating?.rate}</div>
            <div className='my-2 text-xl text-red-500'>Count : {productDetail?.rating?.count}</div>
            <div className='text-5xl font-bold'>{productDetail?.price} <span className='text-sm'>TL</span></div>
            <div className='flex items-center gap-5'>
                <div className='text-5xl cursor-pointer' onClick={decrement}>-</div>
                <input type='text' value={quantity} className='w-12 text-center text-4xl font-bold'/>
                <div className='text-4xl cursor-pointer' onClick={increment}>+</div>
            </div>
            <div onClick={addBasket} className='my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Sepete Ekle</div>

        </div>
        {showMessage && (
          <div className='text-green-500 text-xl mt-4'>
            Ürün başarıyla sepete eklendi!
          </div>
        )}
    </div>
  )
}

export default DetailComp