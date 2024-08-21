import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {STATUS} from '../utils/status'
const initialState = {
    products : [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus:STATUS.IDLE
}

export const getProducts = createAsyncThunk('getproducts',async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = response.json();
    console.warn(data)
    return data;
})


export const getCategoryProducts = createAsyncThunk('getcategoryproducts', async (category, { rejectWithValue }) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        if (!response.ok) {
            // Throw an error if the response is not ok (e.g., 404, 500)
            throw new Error(`Error fetching category products: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("category products", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch category products", error);
        return rejectWithValue(error.message);
    }
});

export const getDetailProduct = createAsyncThunk('getproductdetail',async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = response.json()
    return data 
})
    
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.productsStatus=STATUS.LOADING;
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.productsStatus=STATUS.SUCCESS;
            state.products = action.payload;
            console.warn(action)
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.productsStatus = STATUS.FAIL
        })


        .addCase(getDetailProduct.pending,(state,action)=>{
            state.productDetailStatus=STATUS.LOADING;
        })
        .addCase(getDetailProduct.fulfilled,(state,action)=>{
            state.productDetailStatus=STATUS.SUCCESS;
            state.productDetail = action.payload;
        })
        .addCase(getDetailProduct.rejected,(state,action)=>{
            state.productDetailStatus = STATUS.FAIL
        })


        .addCase(getCategoryProducts.pending,(state,action)=>{
            state.productsStatus=STATUS.LOADING;
        })
        .addCase(getCategoryProducts.fulfilled,(state,action)=>{
            state.productsStatus=STATUS.SUCCESS;
            state.products = action.payload;
            console.warn(action);
        })
        .addCase(getCategoryProducts.rejected,(state,action)=>{
            state.productsStatus = STATUS.FAIL
        })
    }
})

export default productSlice.reducer