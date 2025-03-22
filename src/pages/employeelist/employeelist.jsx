import React from "react";
import './employeelist.css'
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { Button } from "@mui/material";
import { LuUserRoundCog } from "react-icons/lu";
import { CgAdd } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { LuEye } from "react-icons/lu";

const EmployeeList = () => {
    return (

        <>
            <div className="employeelist-section">
                <div className="employeelist-header">
                    <div className="employeelist-top">
                        <div className="employeelist-heading">
                            <div className="employee-icon"><LuUserRoundCog /></div>
                            <h2>Employee List</h2>
                            <div className="employee-count"><h3>0</h3></div>
                        </div>
                        <div className="add-btn-employee">
                            <Link to="/addemployee"> <Button><div className="a-btn-e-icon"><CgAdd /></div>Add New Employee</Button></Link>

                        </div>
                    </div>
                    <div className="employeelist-box">
                        <div className="employeelist-table">
                            <div className="employee-table-top">
                                <div className="s-btn">
                                    <div className="s-input">
                                        <input type="text" placeholder="Search By name or email" />
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
                            <div className="main-elist-table">
                                <table width="100%">
                                    <thead>
                                        <tr>

                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                         <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>hff</td>
                                            <td>jff</td>
                                            <td>ueiur</td>
                                            <td>ijd</td>
                                            <td>dd</td>
                                            <td className="ac-box">
                                                <Button className="hipen"><LuEye /></Button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmployeeList;