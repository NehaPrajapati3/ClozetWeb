
import './App.css';

import React from "react";
import AuthLayout from "./components/AuthLayout.jsx";
import Login from './components/login/login';
import store from "./components/store/store.js";
import SignUp from './components/signUp/signUp';
import {  Provider} from "react-redux";
import {createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css"
import Home from './pages/home/home';
import Dashboard from './pages/dashboard/dashboard';
import TransectionReport from './pages/transectionrp/transection';
import StoresReport from './pages/storesreport/storereport';
import ExpenseReport from './pages/expensereport/expensereport';
import EmployeeRole from './pages/employeerole/employeerole';
import AddNewEmployee from './pages/addnewemployee/addnewemployee';
import EmployeeList from './pages/employeelist/employeelist';
import StoreConfig from './pages/storeconfig/storeconfig';
import MyShop from './pages/myshop/myshop';
import MyWallet from './pages/mywallet/mywallet';
import BankInfo from './pages/bankinfo/bankinfo';
import Withdraw from './pages/withdraw_req/withdraw';
import CollectCash from './pages/collectedcash/cashcollect';
import DeliveryEarn from './pages/deliveryearn/deliveryearn';
import Coupons from './pages/coupons/coupons';
import Banners from './pages/banners/banners';
import AllOrder from './pages/allorders/allorder';
import Newsale from './pages/newsale/newsale';

const router = createBrowserRouter([
  {
    path: '/',
    element:  <Home/>,
    children:[
      {
        path: '/dashboard',
        element:  <Dashboard/>,
      },
      {
        path: '/transection',
        element:  <TransectionReport/>,
      },
      {
        path: '/storereport',
        element:  <StoresReport/>,
      },
      {
        path: '/expensereport',
        element:  <ExpenseReport/>,
      },
      {
        path: '/employeerole',
        element:  <EmployeeRole/>,
      },
      {
        path: '/addemployee',
        element:  <AddNewEmployee/>,
      },
      {
        path: '/employeelist',
        element:  <EmployeeList/>,
      },
      {
        path: '/storeconfig',
        element:  <StoreConfig/>,
      },
      {
        path: '/myshop',
        element:  <MyShop/>,
      },
      {
        path: '/mywallet',
        element:  <MyWallet/>,
      },
      {
        path: '/bankinfo',
        element:  <BankInfo/>,
      },
      {
        path: '/withdrawrequest',
        element:  <Withdraw/>,
      },
      {
        path: '/collectcash',
        element:  <CollectCash/>,
      },
      {
        path: '/deliverypayment',
        element:  <DeliveryEarn/>,
      },
      {
        path: '/coupons',
        element:  <Coupons/>,
      },
      {
        path: '/banners',
        element:  <Banners/>,
      },
      {
        path: '/allorder',
        element:  <AllOrder/>,
      },
      {
        path: '/newsale',
        element:  <Newsale/>,
      },
    ]
  },
  {
    path: '/login',
    element: (
      <AuthLayout authentication = {false}>
        <Login/>
      </AuthLayout>
    )
  },
  {
    path: '/register',
    element: (
      <AuthLayout authentication = {false}>
        <SignUp/>
      </AuthLayout>
    )
  },
])






function App() {
 
  
  return (
    <>
    
    <Provider store = {store}>
    <RouterProvider router = {router}/>
    </Provider>
    </>
  );
}

export default App;
