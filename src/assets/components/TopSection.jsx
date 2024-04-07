import React ,{useEffect, useState} from 'react'

const TopSection = ({value}) => {
    let {image,setStore,check}=value;
    let [input,setInput]=useState("");
    useEffect(()=>{
    setStore(image.filter(ele=>ele.type.includes(input)));
    },[input]);
    return (
        <>
            <div className='h-auto py-10 md:min-h-[200px] max-w-[1440px] m-auto bg-gray-800 flex flex-wrap items-center justify-between px-16'>
                <h3 className='text-2xl text-gray-300 font-bold'>Foody Zone</h3>
                <div className='my-10 md:my-0 flex gap-5 flex-wrap lg:self-end mb-5'>
                    <button className='px-4 py-1 bg-[#FF4343] text-white rounded-md'onClick={()=>{check("all")}}>All</button>
                    <button className='px-4 py-1 bg-[#FF4343] text-white rounded-md'onClick={()=>{check("pasta")}}>Breakfast</button>
                    <button className='px-4 py-1 bg-[#FF4343] text-white rounded-md'onClick={()=>{check("chowmin")}}>Launch</button>
                    <button className='px-4 py-1 bg-[#FF4343] text-white rounded-md'onClick={()=>{check("momo")}}>Dinner</button>
                </div>
                <div><input type="text" placeholder="search items..." className='outline-none mt-10 md:mt-0 h-10 w-72 pl-6 rounded border border-red-700 bg-gray-800 text-white' onChange={e=>setInput(e.target.value)} /></div>
            </div>
        </>
    )
}

export default TopSection;