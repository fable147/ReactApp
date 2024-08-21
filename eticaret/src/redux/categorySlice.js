import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories : ["Hepsi"]
}

export const getCategories = createAsyncThunk('category', async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Data:", data); // Log the API data
        console.log("res Data:", response); // Log the API data

        return data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
});

const categorySlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.categories = action.payload;
        })
        builder.addCase(getCategories.rejected,(state,action)=>{
            console.log("rejected")
        })
    }
})

export default categorySlice.reducer