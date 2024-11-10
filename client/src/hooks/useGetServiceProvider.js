import React, { useState } from 'react'

function useGetServiceProvider() {
    const [loading,setLoading]=useState(false)
    const [providers,setProviders]=useState([])
    
    const getProviders=async(service)=>{
        setLoading(true)
    try {
        const res=await fetch(`http://localhost:5000/api/service/${service}`)
        const data=await res.json()
        console.log(data);
        
        if(data.error){
            throw  new Error(data.error);
        }

        setProviders(data)
    } catch (e) {
        alert(e.message)        
    }finally{
        setLoading(false);
    }}
  
    return {loading,providers,setProviders,getProviders};
}

export default useGetServiceProvider