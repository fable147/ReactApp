import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

function Category({setCategory}) {
  const dispatch = useDispatch();
  const categories = [...useSelector(state=>state.categories.categories),"Hepsi"]
  useEffect(()=>{
    dispatch(getCategories())
  },[dispatch])
  return (
    <div className='w-1/6 bg-gray-100'>
    <div className='border-b pb-2 text-xl font-bold px-2'>KATEGORİ</div>
    {categories && categories.length > 0 ? (
      categories.map((category, index) => (
        <div onClick={()=>setCategory(category)} className="text-lg mt-2 cursor-pointer hover:bg-gray-200 p-2" key={index}>{category}</div>
      ))
    ) : (
      <div>No categories available</div>
    )}
  </div>
  )
}

export default Category