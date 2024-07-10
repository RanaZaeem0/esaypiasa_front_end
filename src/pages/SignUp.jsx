import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import SubHeading from '../componut/SubHeading'
import Input from '../componut/Input'
import Button from '../componut/Button'
import ButtonWarning from '../componut/ButtonWarning'
import { useSelector,useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

export default function SignUP() {




    const [username ,setUsername] = useState('')
    const [firstname ,setFirstName] = useState('')
    const [lastname ,setLastName] = useState('')
    const [password ,setPassword] = useState('')
    const Naviagte = useNavigate()
    const Dispatch = useDispatch()

    const authStatus =useSelector(state => state.auth.status)
    if(authStatus){
      navigator('/dashboard')
    }
    console.log(authStatus);

console.log(firstname);
  const Signup  = async ()=>{
    try {
  
  if(username.length > 4 && firstname.length > 2 && lastname.length > 2 && password.length > 6
  ){
        
    let userDetails =  {username , firstname , lastname , password}
    console.log(userDetails);
  
   const response  = await  axios.post('https://server-lovat-psi.vercel.app/api/user/signup',{
      userDetails,
        headers:{
            'Content-Type': 'application/json',
        },
    })
     if(response.status == 200){
      localStorage.setItem('token',response.data.token)
      Dispatch(login(response.data))
      Naviagte('/dashboard')
     }



        return userDetails
      }else{
    console.log("input ara input frontend");
      }

    } catch (error) {
      console.log(`error occuor during signup ${error}`);
    }
  }
  
  return (<div className='bg-slate-900 h-screen flex justify-center'>
  <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
   <h2 className='!text-black font-medium'>Sign up</h2>
   <SubHeading label={"Enter your info"} />
   <Input  onChange={e=>setFirstName(e.target.value)} type={'text'} placeholder={"first Name"} label={"first Name"} />
   <Input onChange={e=>setLastName(e.target.value)} type={'text'} placeholder={"Doe"} label={"Last Name"} />
   <Input onChange={e=>setUsername(e.target.value)} type={'email'} placeholder={"example@gmai.com"} label={"email"} />
   <Input onChange={e=>setPassword(e.target.value)} type={'password'} placeholder={"212141"} label={"password"} />
<div className="pt-4">
  <Button label={'Sign up'} onClick={Signup}/>
</div>
<ButtonWarning label={'Already Have an account ?'} buttonText={"Sign in"} to={'/signin'} />





    </div>
  </div>
    </div>
  )
}
