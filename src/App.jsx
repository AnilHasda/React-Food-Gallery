
import { useState,useEffect } from 'react';
import './App.css';
import HeroSection from './assets/components/HeroSection';
import TopSection from './assets/components/TopSection';
import food from './assets/api/API';
function App(){
  let [image,setImage]=useState(food?food:[]);
  let [store,setStore]=useState(image);
  const check=(element)=>{
    let response=image.filter(ele=>ele.type===element);
    setStore(response)
    if(element==="all"){
        setStore(image);
    }
  }
  return(
    <>
    <p className="text-2xl font-bold text-orange-700 text-center my-10">Food Gallery React Project</p>
  <div className='h-auto w-auto bg-gray-800'>
    <TopSection value={{image,setStore,check}}/>
    <HeroSection value={{store}}/>
    </div>
    </>
  )
}

export default App
