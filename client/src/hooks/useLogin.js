import React, { useState } from 'react'
import  useAuthContext  from '../context/AuthContext';

function useLogin() {
  const [loading,setLoading]=useState(false);
const {authUser,setAuthUser}=useAuthContext();
  const login=async({email,password})=>{
    setLoading(true);
    try {
        
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method:"POST",
            headers:{ 'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const data=await response.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.setItem('user',JSON.stringify(data))
        setAuthUser(data);
    } catch (error) {
        alert(error.message);
    }finally{
        setLoading(false);
    }
  }
  return {loading,login}
}

export default useLogin