import React, { useEffect, useState } from 'react'
const HeroSection = ({value}) => {
  let {store}=value;
  return (
    <div className='min-h-[500px] max-w-[1440px] pb-10 m-auto flex gap-10 flex-wrap items-center justify-center text-white bg-no-repeat bg-cover'style={{backgroundImage:"url(./images/bg.png"}}>
      {store.length>0?store.map((ele,index)=>{
        return(
          <div key={index} className='h-[350px] w-[280px] bg-slate-900 mt-10 flex flex-col items-center justify-between rounded-xl overflow-hidden'>
            <img src={ele.src} alt={ele.type+index} className='w-full h-auto self-start'/>
            <p className='pb-14 text-sm px-4'>Detail:{ele.description.slice(0,80)}</p>
            </div>
        )
      }):<h1 className="text-white font-bold text-2xl">image not found</h1>}
    </div>
  )
}

export default HeroSection;