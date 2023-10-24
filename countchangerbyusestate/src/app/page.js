'use client'
import React, { useState } from 'react'

const page = () => {

let [count, setCount] = useState(10);

  const addCount = () =>{
    if(count<20)
   setCount(++count)
  }
  
  function removeCount(){
    if(count>0)
  setCount(--count)

}
  return (
<>
<div className='flex justify-center flex-col items-center w-screen h-screen gap-3'>
   <h1 className='font-bold text-2xl '>Count :- {count}</h1>
   <button className=' mt-2 py-1 px-2 font-semibold bg-slate-500 text-white rounded'
   onClick={addCount}> Add Count </button>
   <button className=' mt-2 py-1 px-2 font-semibold bg-slate-500 text-white rounded'
   onClick={removeCount}> Remove Count </button>

</div>
</>
  )
}

export default page