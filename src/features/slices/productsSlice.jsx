import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategory, fetchProducts } from "../service/productsService";




const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categoryProducts:  [],  // ✅ Separate category-wise product state
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
  },
  reducers: {},  // ✅ Fix: Empty object hona chahiye
  
  extraReducers: (builder) => {
    builder
      // ✅ Fetch All Products
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.isSuccess = true;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      
      // ✅ Fetch Category-wise Products
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.products = [];  // ✅ Pehle Purane Products Remove Kar Rahe Hai
    })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoryProducts = action.payload;  // ✅ Update only category products
        state.isSuccess = true;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const getProducts = createAsyncThunk("GET/PRODUCTS", async (_, thunkAPI) => {
  try {
    return await fetchProducts();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Something went wrong!");
  }
});

// ✅ Fetch category-wise products (Dynamic Category Parameter Fix)
export const getCategories = createAsyncThunk("GET/CATEGORIES", async (categories, thunkAPI) => {
    try {
        console.log("Fetching Category Data for:", categories);  // 🛠 Debugging
        return await fetchCategory(categories);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Something went wrong!");
    }
});
export default productsSlice.reducer;
