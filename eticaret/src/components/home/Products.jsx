import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts,getCategoryProducts } from '../../redux/productSlice';
import Product from './Product';
import Loading from '../Loading';
import ReactPaginate from 'react-paginate';


function Products({category,sort}) {
  const dispatch = useDispatch();
  const {products,productsStatus} = useSelector(state=>state.products);

  useEffect(()=>{
    if(category && category !== "Hepsi")
    {
      dispatch(getCategoryProducts(category))
    }
    else{
      dispatch(getProducts())
    }
  },[dispatch,category])

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log(sort);
  return (
    <div>
      {
        productsStatus === "LOADING" ? <Loading/>:
        <>
          <div className='flex flex-wrap'>
        {
          currentItems?.sort((a,b)=>sort == "Artan" ? a.price-b.price:sort=="Azalan" ? b.price-a.price:null)?.map((product,index)=>(
            <Product key={index} product={product}/>
          ))
        }
          </div>
          <ReactPaginate
          className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        activeClassName='active'
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
        </>
      }
    </div>
  )
}

export default Products