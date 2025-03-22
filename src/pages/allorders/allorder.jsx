import React from "react";
import './allorder.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { Button } from "@mui/material";
import Footer from '../footer/footer'

const AllOrder = ()=>{
    return(
        <>
        <div className="order-section">
            <div className="order-header">
                <div className="order-top">
                    <div className="order-heading">
                        <div className="allorder-img">
                            <img src="./images/order-delivery.png" alt=""/>
                        </div>
                        <div className="top-heading">
                            <h2>All Orders</h2>
                            <span className="o-list"><h3>0</h3></span>
                        </div>
                    </div>
                </div>
                <div className="order-table">
                    <div className="order-table-section">
                            <div className="tb-or-top">
                            <div className="s-btn">
                                <div className="s-input">
                                    <input type="text" placeholder="Search By Refrance or Name" />
                                    <div className="icon-s">
                                        <IoSearchSharp />
                                    </div>
                                </div>
                                <div className="ex-select">
                                    <Button className="e-btn">
                                        <span><MdFileDownload /></span>Export<span><IoIosArrowDown /></span>
                                    </Button>
                                </div>
                            </div>
                            </div>
                            <div className="main-or-table">
                               
                                                            <table width="100%">
                                                                <thead >
                                                                    <tr >
                                                                        <th>SI</th>
                                                                        <th>Order Id</th>
                                                                        <th>Order Date</th>
                                                                        <th>Customer Infomation</th>
                                                                        <th>Total Amount</th>
                                                                        <th>Order Status</th>
                                                                        <th>Actions</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody >
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                        <td className="ac-box">
                                                                                                <Button className="hipen"><LuEye /></Button>
                                                                        
                                                                                              </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                      <td className="ac-box">
                                                                                              <Button className="hipen"><LuEye /></Button>
                                                                      
                                                                                            </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                        <td className="ac-box">
                                                                                                <Button className="hipen"><LuEye /></Button>
                                                                        
                                                                                              </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                        <td className="ac-box">
                                                                                                <Button className="hipen"><LuEye /></Button>
                                                                        
                                                                                              </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                        <td className="ac-box">
                                                                                                <Button className="hipen"><LuEye /></Button>
                                                                        
                                                                                              </td>
                                                                    </tr>
                                                                    <tr align="center">
                                
                                                                        <td >1</td>
                                                                        <td >Deliveryman</td>
                                                                        <td ></td>
                                                                        <td >1-28-2025 12:9 </td>
                                                                        <td>2400</td>
                                                                        <td></td>
                                
                                
                                                                       <td className="ac-box">
                                                                                               <Button className="hipen"><LuEye /></Button>
                                                                       
                                                                                             </td>
                                                                    </tr>
                                
                                                                </tbody>
                                                            </table>
                                
                                                        </div>
                          
                    </div>
                </div>
                <Footer/>
            </div>
            
        </div>
        </>
    )
}

export default AllOrder;