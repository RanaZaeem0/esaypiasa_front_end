import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUP from './pages/SignUp.jsx';
import Dasborad from './pages/Dasborad.jsx';
import Transfer from './componut/Transfer.jsx';
import SendMoney from './pages/SendMoney.jsx';
import Signin from './pages/Signin.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import AuthLayout from './pages/AuthLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout>
    <SignUP/>
  </AuthLayout>,
  },
  {
    path: "/signup",
    element:<AuthLayout>
  <SignUP/>
  </AuthLayout>
  },
  {
    path: "/signin",
    element:<AuthLayout>
    <Signin/>
  </AuthLayout>
  },
  {
    path: "/dashboard",
    element:<AuthLayout>
    <Dasborad/>
  </AuthLayout>,
  },
  {
    path: "/transfer",
    element:<AuthLayout>
    <Transfer/>
  </AuthLayout>,
  },
  {
    path: "/sendmoney",
    element:<AuthLayout>
    <SendMoney/>
  </AuthLayout>,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
