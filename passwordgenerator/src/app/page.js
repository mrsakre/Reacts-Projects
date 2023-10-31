'use client'

import React, { useCallback, useEffect, useState } from 'react'

const page = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed]= useState(false);
  const [charAllowed, setcharAllowed]= useState(false);
  const [password, setPassword] = useState("");
  
  const passwordGenerator= useCallback(()=>{
     let pass="";
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed){
      str+="1234567890";
     }
     if(charAllowed){
      str+="!@#$%&*^?/";
     }
     for (let i = 1; i <=length; i++) {
         let char= Math.floor(Math.random()*str.length +1);
         pass+=str.charAt(char);
     }

     setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(() => {
    passwordGenerator()
    }
  , [length,charAllowed,numberAllowed,passwordGenerator])
  
  return (
  <>
  <h1 className='text-white text-center my-10 text-3xl font-semibold '> Password Generator </h1>

  <div className=' gap-2 bg-gray-800 text-orange-500 font-semibold w-full max-w-md mx-auto rounded-lg shadow-lg px-4 py-5 '> 
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input className='rounded-lg px-3 py-1 outline-none w-full' type="text" placeholder='Password' value={password} readOnly  />
  <button className=' text-white outline-none font-semibold bg-blue-700 px-2 rounded-lg shrink-0'> Copy</button>
  </div>
  <div className='flex gap-x-2 text-sm w-full '>
    <div className='flex items-center gap-x-1'>
    <input
    min={8}
    max={100}
    className='cursor-pointer'
     type="range" value={length} 
     onChange={(e)=>{setLength(e.target.value)}}/>
  <label> Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input
     type="checkbox"
     defaultChecked={numberAllowed}
     onChange={()=>{
      setnumberAllowed((prev)=> !prev);
     }} />
    
  <label> Numbers</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input
     type="checkbox"
     defaultChecked={charAllowed}
     onChange={()=>{
      setcharAllowed((prev)=>!prev);
     }} />
  <label> Characters</label>
    </div>

  </div>
  
   </div>
      
  </>
  )
}

export default page