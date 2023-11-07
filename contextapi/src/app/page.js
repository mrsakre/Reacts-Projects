"use client"

import React from 'react'
import Login from '@/Components/Login/Login'
import UserContextProvider from './Context/UserContextProvider'
import  Profile  from '@/Components/Profile/Profile'

const page = () => {
  return (
<UserContextProvider>
   <Login/>
   <Profile/>
</UserContextProvider>
  )
}

export default page