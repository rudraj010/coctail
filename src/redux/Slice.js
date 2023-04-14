import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchCocktails= createAsyncThunk(
    "cocktails/fetchCocktails",
    async ()=>{
        return fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        ).then((res)=>(res.json()))
    }

)
console.log(fetchCocktails,'fectch details')
export const cocktailSlice=createSlice(
    {
    name:'cocktails',
    initialState:{
        loading: false,
        cocktails:[],
        error:null,
        cocktail:[]
    },

    extraReducers:{
        [fetchCocktails.pending]: (state, action) => {
            console.log('pending')
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload;
            console.log('fulfilled',action.payload)
            
          },
          [fetchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.log('rejected')

          },
    }
}
)

export default cocktailSlice.reducer;

// import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


// const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
//    const API_ID =`37c4cfeb`;

//    export const getrecipe=createAsyncThunk('recipe/getrecipoe', async(data)=>{
//     return fetch(`https://api.edamam.com/search?q=${data}&app_id=${API_ID}&app_key=${API_KEY}`).then((res)=>
//     res.json()
//     )
//    } )

//    export const getrecipe= createAsyncThunk(
//     "cocktails/fetchCocktails",
//     async ()=>{
//         return fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         ).then((res)=>(res.json()))
//     }

// )


//    export const RecipeThunkSlce= createSlice(
    
//     { 
//             name:'cocktails',
//             initialState:{
//                 loading: false,
//                 cocktails:[],
//                 error:null,
//                 cocktail:[]
//             },
   

//     reducers:{
//         eraceRecipe:(state)=>{
//             state.cocktail=null;
//         },
//     },

//     extraReducers:{
//      [getrecipe.pending]:(state)=>{
//         state.loading=true
//      },

//      [getrecipe.fulfilled]:(state,action)=>{
//         state.loading=false
//         console.log(action.payload,'payload')
//         state.cocktail=action.payload
//         state.cocktails=action.payload
        
//      },

//      [getrecipe.rejected]:(state)=>{
//         state.loading=false

//      }
  

//     }



//    })


// export const { eraceRecipe } = RecipeThunkSlce.actions;




// export default RecipeThunkSlce.reducer;

