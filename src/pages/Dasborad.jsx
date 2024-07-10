import React, { useEffect, useState } from 'react'

import Navbar from '../componut/Navbar'

import axios from 'axios'
import { useNavigate } from 'react-router'
import Button from '../componut/Button'
import Input from '../componut/Input'
import Balance from '../componut/Balance'
import { useSelector } from 'react-redux'

export default function Dasborad() {
  const navigate = useNavigate()
  const [searchName, setSearchName] = useState('')
  const [userData, setUserData] = useState([])
  console.log(searchName);

  const authStatus = useSelector(state => state.auth.status)

  useEffect(()=>{
    if(!authStatus ){
    
      console.log(authStatus+ "staus");
     navigate('/signup')
    }
  },[])

  useEffect(() => {
async function fetachData (){
  if (searchName.length > 1) {
   await  axios.get(`https://server-lovat-psi.vercel.app/api/user/bulk?filter=${searchName}`).then((responce
    ) => {
      if (responce.status == 200) {
        console.log(
          searchName
        );
        const data = responce.data
        setUserData(data.user)

        console.log(responce.status);
        console.log(responce.data.user)
      }

    })


  }
  
}
fetachData()
  
  }, [searchName,])



  return (<div className=" flex items-center h-screen w-full flex-col">
    <Navbar />
    <div className="flex flex-col w-full p-4 bg-slate-400">
     <Balance />
      <div className="">        
          <Input onChange={e => setSearchName(e.target.value)} placeholder={'enter your friend name'} label={'search'} />
       </div>
    </div>
    <div className="w-full">
      your Frind
      {userData && userData.map(user => {
        return <div className="flex   p-4  text-white  items-center justify-between  " key={user._id}>
          <h1>{} {user.firstname}</h1>
          <Button onClick={() => {
            navigate(`/sendmoney?id=${user._id}&name=${user.firstname}`)
          }} label={"send money"} />


        </div>

      })}
    </div>
  </div>

  )
}
