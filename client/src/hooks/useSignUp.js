import React, { useState } from 'react'
import useAuthContext from '../context/AuthContext';

function useSignUp() {
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}= useAuthContext()
    
    const signup=async({fullName,email,password,confirmPassword,skills,role})=>{
        setLoading(true)
        try {
            
            console.log("Hey");
            
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method:"POST",
                headers:{ 'Content-Type':'application/json'},
                body:JSON.stringify({fullName,email,password,confirmPassword,skills,role})
            })

            // console.log("Hey");
            const data=await response.json()
            console.log(data);
            
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("user",JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            alert(error)
        }finally{
            setLoading(false)
        }
    }
    return {loading,signup}
}

export default useSignUp