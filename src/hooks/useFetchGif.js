import { useState,useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFecthGifs = ( category) => {

  const [state, setstate] = useState({
    
    data: [],
    loading: true
  })

  useEffect(()=>{
    getGifs( category ).then( img => {
        setstate({
          data: img,
          loading: false
        })
    });
  },[category]) // esto para que se vuelva a re renderizar si hay algun cambio

  return state; 
}