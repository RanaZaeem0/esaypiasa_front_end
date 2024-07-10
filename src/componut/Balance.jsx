import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Balance() {
    const token = localStorage.getItem('token')
  const [userBalance,setUserBalance] = useState(0)
    useEffect(()=>{
async function dataFeacth(){
    await axios.get('https://server-lovat-psi.vercel.app/api/account/balance', {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }})
    .then(res =>{
        console.log(res.data);
        setUserBalance(res.data.balance)
    })
}
dataFeacth()
    },[])
  
    return (
    <div>
 Your Balance {userBalance}
     </div>
  )
}
