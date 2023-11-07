"use client"
import UserContext from '@/app/Context/UserContext'
import React, { useContext } from 'react'

 const Profile = () => {
    let {user} = useContext(UserContext);

if(!user) return <h1>Please Login </h1>

return <h1> Welcome {user.name}</h1>
}
export default Profile