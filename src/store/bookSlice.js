import { createSlice } from "@reduxjs/toolkit";
import { booksData } from "../utils/books.data.js";

const bookSlice = createSlice({
    name:"books",
    initialState:{
        booksList:booksData
    },
    reducers:{
        addBook:(state,action)=>{
              state.booksList.unshift(action.payload);
        }
    }
})

export const {addBook} = bookSlice.actions;
export default bookSlice.reducer;