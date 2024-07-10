import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './pages/SignUp'
import {useSelector,useDispatch} from "react-redux"
import Navbar from "./componut/Navbar"
function App() {
  const [count, setCount] = useState(0)

  const authStatus =useSelector(state => state.auth.status)
   console.log(authStatus);

  return (
   <div className="">
    <Navbar/>
    <SignUp/>
   </div>
  )
}

export default App
