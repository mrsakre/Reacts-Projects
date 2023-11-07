"use client"

import UserContext from '@/app/Context/UserContext'
import React, { useContext, useState } from 'react'

const Login = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let {setUser} = useContext(UserContext)

const handleSubmit=(e)=>{
    e.preventDefault();
    setUser({name,email})

}

    
  return (
   <>

    <div class="outerbox">
      <div class="innerbox">
        <header class="signup-header">
          <h1>SignUp</h1>
          <p>It just takes 30 seconds</p>
        </header>
        <main class="signup-body">
          <form action="#">
            <p>
              <label for="Full name"> Full name</label>
              <input type="text" id="Full name" required="" value={name}
              onChange={(e)=>setName(e.target.value)}/>
            </p>
            <p>
              <label for="Email"> Email</label>
              <input type="email" id="Email" required="" value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
            </p>
            <p>
              <label for="password"> New password</label>
              <input type="password" id="password" placeholder="at least 8 characters" required="" value={password}
              onChange={(e)=>setPassword(e.target.value)}/> 
            </p>
            <p>
              <input type="submit" id="submit " value="Create Account" required=""/>
            </p>
          </form>
        </main>
        <footer class="signup-footer">
          <p>Already have an Account? <a onClick={handleSubmit} href="">Login</a></p>
        </footer>
      </div>
  
      
    </div>
  


   
   </>
  )
}

export default Login