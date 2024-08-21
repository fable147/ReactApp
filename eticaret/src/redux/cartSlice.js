import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () =>{
    let cart =  localStorage.getItem('cart');
    if(cart)
        {
            return JSON.parse(localStorage.getItem('cart'))
        }
        else{
            return[]
        }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart',JSON.stringify(data));
}


const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount : 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtoCart: (state,action) => {
            console.warn(action)
            const isItemExist = state.carts.find(item => item.id === action.payload.id)
            if(isItemExist)
            {
                let tempCart = state.carts.map(item => {
                    if(item.id === action.payload.id)
                    {
                        let tempQuantity = item.quantity + action.payload.quantity;
                        let tempTotalPrice = item.price + tempQuantity;
                        return{
                            ...item,quantity:tempQuantity,totalPrice:tempTotalPrice
                        }
                    }
                    else{
                        return item;
                    }
                })
                state.carts = tempCart;
                storeInLocalStorage(state.carts)
            }
            else
            {
                state.carts.push(action.payload)
                storeInLocalStorage(state.carts)
            }
        },
        removeFromCart: (state,action)=> {
            const tempCart = state.carts.filter(item => item.id !== action.payload)
            state.carts = tempCart;
            state.totalAmount = state.carts.reduce((cartTotal,cartItem)=>{
                return cartTotal += cartItem.price * cartItem.quantity
            },0)
            storeInLocalStorage(state.carts)
        },
        clearCart: (state)=> {
            state.carts = [];
            storeInLocalStorage(state.carts)
        },
        getCartTotal: (state)=> {
            state.totalAmount = state.carts.reduce((cartTotal,cartItem)=>{
                return cartTotal += cartItem.price * cartItem.quantity
            },0)
            state.itemCount = state.carts.length
            //storeInLocalStorage(state.carts)
        }
    }
}) 

export const {addtoCart,removeFromCart,clearCart,getCartTotal} = cartSlice.actions;
export default cartSlice.reducer;