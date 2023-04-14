import {configureStore} from '@reduxjs/toolkit'
import cocktailSlice from './Slice'



export const store = configureStore({
    reducer: {
    count: cocktailSlice,
    
    },
  });