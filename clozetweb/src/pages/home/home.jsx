import React, { createContext, useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Outlet } from "react-router-dom"; 
import './home.css'
// import { Route, Routes } from "react-router-dom";
// import Dashboard from "../dashboard/dashboard";

// import TransectionReport from '../transectionrp/transection';
// import StoresReport from '../storesreport/storereport';
// import ExpenseReport from '../expensereport/expensereport';
// import EmployeeRole from '../employeerole/employeerole';
// import AddNewEmployee from '../addnewemployee/addnewemployee';
// import EmployeeList from '../employeelist/employeelist';
// import StoreConfig from '../storeconfig/storeconfig';
// import MyShop from '../myshop/myshop';
// import MyWallet from '../mywallet/mywallet';
// import BankInfo from '../bankinfo/bankinfo';
// import Withdraw from '../withdraw_req/withdraw';
// import CollectCash from '../collectedcash/cashcollect';
// import DeliveryEarn from '../deliveryearn/deliveryearn';
// import Coupons from '../coupons/coupons';
// import Banners from '../banners/banners';
// import AllOrder from '../allorders/allorder';
// import Newsale from '../newsale/newsale';
// import Login from "../../components/login/login";





const MyContext = createContext();



const Home = () => {
    const [sidebardrop, setSidebardrop] = useState(false)

    const values = {
        sidebardrop,
        setSidebardrop
    }


    return (
        < >
            <MyContext.Provider value={values}>
                <Header />


                <div className='section-container'>

                    <div className={`sidebar ${sidebardrop === true ? 'toggle' : ''}`}>
                        <Sidebar />
                    </div>
                    <div className={`page-content ${sidebardrop === true ? 'toggle' : ''}`}>
                    <Outlet /> 
                        {/* <Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path='/allorder' element={<AllOrder />} />
                            <Route path='/newsale' element={<Newsale />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/transection' element={<TransectionReport />} />
                            <Route path='/storereport' element={<StoresReport />} />
                            <Route path='/expensereport' element={<ExpenseReport />} />
                            <Route path='/employeerole' element={<EmployeeRole />} />
                            <Route path='/addemployee' element={<AddNewEmployee />} />
                            <Route path='/banners' element={<Banners />} />
                            <Route path='/coupons' element={<Coupons />} />
                            <Route path="/employeelist" element={<EmployeeList />} />
                            <Route path="/storeconfig" element={<StoreConfig />} />
                            <Route path="/myshop" element={<MyShop />} />
                            <Route path="/mywallet" element={<MyWallet />} />
                            <Route path="/bankinfo" element={<BankInfo />} />
                            <Route path="/withdrawrequest" element={<Withdraw />} />
                            <Route path="/collectcash" element={<CollectCash />} />
                            <Route path="/deliverypayment" element={<DeliveryEarn />} />
                          
                        </Routes> */}



                    </div>

                </div>

            </MyContext.Provider>


           


        </>
    )
}
export default Home;
export { MyContext }

