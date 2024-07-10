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

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin/>,
  },
  {
    path: "/",
    element: <SignUP/>,
  },
  {
    path: "/signup",
    element:<SignUP/>,
  },
  {
    path: "/dashboard",
    element:<Dasborad/>,
  },
  {
    path: "/transfer",
    element:<Transfer/>,
  },
  {
    path: "/sendmoney",
    element:<SendMoney/>,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>,
)
