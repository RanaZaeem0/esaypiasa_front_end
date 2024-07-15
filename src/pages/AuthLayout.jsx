import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useBeforeUnload, useNavigate } from 'react-router-dom'

export default function AuthLayout({children, authentication = true}) {
    const Navigate  = useNavigate()
    const authStatus = useSelector(state => state.auth.status)
    const [loading,setLoading] = useState(true)
  useEffect(()=>{
if(authStatus){
    Navigate('/dasboard')
    setLoading(false)
}else{
    setLoading(false)

    Navigate('/signup')
}       
  },[])
    return (<>
      {loading ? "loading ..." : children}
    </>
  )
}
