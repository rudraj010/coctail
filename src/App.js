import React,{useEffect} from 'react'

import { useDispatch, useSelector } from "react-redux";
import logo from './logo.svg';
import {fetchCocktails} from './redux/Slice'

import './App.css';
function App() {

  const dispatch =useDispatch()

  const { loading, cocktails, error,cocktail } = useSelector((state) => ({
    ...state.count,
  }));

  console.log(cocktails,'pppp')

  let data=useSelector((state)=>state.count)

  useEffect(() => {
   dispatch(fetchCocktails(data))
    console.log(dispatch(fetchCocktails()),'wwww')
    
  }, [])

  console.log(data  ,'l000l')


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
