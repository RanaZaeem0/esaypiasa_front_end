import React, { useEffect, useState } from 'react'
import Input from '../componut/Input'
import Button from '../componut/Button'
import { useNavigate, useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
export default function SendMoney() {


  const [amount,setAmount] = useState(0)
  const [serachParams]= useSearchParams('id')
const id  = serachParams.get("id")
const userName = serachParams.get('name')
const naviagate= useNavigate()



const authStatus =useSelector(state => state.auth.status)
console.log(authStatus);
const token = localStorage.getItem('token')

useEffect(()=>{
  if(!authStatus && token.length > 4){
    console.log(token);
    console.log(authStatus+ "staus");
   naviagate('/signup')
  }
},[])


const sendmoney = async()=>{
  const userData= {amount:amount,to:id}
  console.log(token);
   await axios.post('https://server-lovat-psi.vercel.app/api/account/transfer',
    userData,{
    headers:{
        'Content-Type': 'application/json',
        "Authorization":`Bearer ${token}`
    },
    
  }).then(responce =>{
    if(responce.status == 200){
      alert(`you send ${amount} to ${userName} done !`)
      naviagate('/dashboard')
    }
  })
}

console.log(id);
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="w-80 border rounded-xl bg-slate-200 text-black p-4 ">
      <h2 className='font-bold '>Send Money</h2>
<h2>Person :{userName}</h2>  
      <Input placeholder={'0'} label={"Amount"} type={'number'} onChange={e => setAmount(e.target.value)}/>
      <Button label={"Send"} onClick={sendmoney} />
      
      </div>
    
    </div>
  )
}
