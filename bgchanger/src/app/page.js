'use client'

import React, { useState } from 'react'

const page = () => {

  const [color, setColor] = useState("olive")
  return (
   <>
   <div className=' w-full h-screen relative'
   style={{backgroundColor:color}}>

<div className='fixed bottom-10 flex justify-between gap-7 rounded-full py-3 px-4 bg-white mx-72'>
             <button onClick={()=>setColor("red")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"red"}}>RED</button>
             <button onClick={()=>setColor("blue")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"blue"}}>BLUE</button>
             <button onClick={()=>setColor("green")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"green"}}>GREEN</button>
             <button onClick={()=>setColor("magenta")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"magenta"}}>MAGENTA</button>
             <button onClick={()=>setColor("black")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"black"}}>BLACK</button>
             <button onClick={()=>setColor("skyblue")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"skyblue"}}>SKYBLUE</button>
             <button onClick={()=>setColor("lightcoral")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"lightcoral"}}>LIGHTCORAL</button>
             <button onClick={()=>setColor("purple")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"purple"}}>PURPLE</button>
             <button onClick={()=>setColor("olive")} className="rounded-full px-5 py-3 text-white" style={{backgroundColor:"olive"}}>OLIVE</button>
     </div>
       

   </div>


   </>
  )
}

export default page