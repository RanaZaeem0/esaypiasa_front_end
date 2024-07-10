import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SubHeading from '../componut/SubHeading'
import Input from '../componut/Input'
import Button from '../componut/Button'
import ButtonWarning from '../componut/ButtonWarning'
export default function Signin() {
const naigavte  = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async ()=>{
      if(username.length > 3 && password.length > 6){
          console.log("enter ");
            try {
                const userDetails  = {username , password}
                
                const response = await axios.post('https://server-lovat-psi.vercel.app/api/user/signin',
                  userDetails,
                  {  
                    headers:{
                        'Content-Type': 'application/json'
                    },
                })
                if(response.status == 200 ){
                    localStorage.setItem('token',response.data.token)
                naigavte('/dashboard')
                }
            } catch (error) {
                console.log(` ${error}`);
            }
        }
    }
    
  return (
    <div className='bg-slate-800 h-screen flex justify-center'>
  <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
   <h2 className='text-black font-medium'>Sign In</h2>
   <SubHeading label={"Enter your info"} />
  
   <Input onChange={e=> setUsername(e.target.value)} type={"email"} placeholder={"example@gmai.com"} label={"email"} />
   <Input onChange={e=> setPassword(e.target.value)} type={"password"} placeholder={"212141"} label={"password"} />
<div className="pt-4">
  <Button label={'Sign In'} onClick={login}/>
</div>
<ButtonWarning label={'I dont have an account ?'} buttonText={"Sign in"} to={'/signup'} />





    </div>
  </div>
    </div>
    
  )
}
