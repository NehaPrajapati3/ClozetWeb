import React from "react";
import './addnewemployee.css'
import { LuUserRoundCog } from "react-icons/lu";
import { RiUserFill } from "react-icons/ri";
import { PiWarningCircleBold } from "react-icons/pi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material"; 
import Footer from '../footer/footer'

const AddNewEmployee = ()=>{
     const [role, setRole] = React.useState('');
       
           const handleRole = (event) => {
               setRole(event.target.value);
           }
    return(
        <>
       <div className="addnew-employee-section">
       <div className="addnew-employee-header">
        <div className="addnew-e-top">
          <div className="addnew-e-heading">
            <div className="addnew-e-icon"><LuUserRoundCog/></div>
            <h2>Add New Employee</h2>
          </div>
        </div>
        <div className="e-genral-info-box">
           <div className="e-genral-info">
            <div className="e-genral-info-top">
                <div className="e-genral-heading">
                    <div className="e-genral-icon"><RiUserFill/></div>
                    <h3>Genral Infomation</h3>
                </div>
            </div>
            <div className="addnew-e-form-box">
                <div className="addnew-left">
                    <form>
                    <div className="addnew-input-box">
                        <div className="boxf">
                       <label >First Name</label>
                       </div>
                       <div className="add-input">
                        <input type="text" placeholder=" Ex: Sakeel Ameer" />
                       </div>
                    </div>
                    <div className="addnew-input-box">
                        <div className="boxf">
                       <label >Last Name</label>
                       </div>
                       <div className="add-input">
                        <input type="text" placeholder=" Ex: Sakeel Ameer" />
                       </div>
                    </div>
                    <div className="addnew-input-box">
                        <div className="boxp">
                       <label >Phone</label>
                       </div>
                       <div className="add-input">
                        <input type="text" placeholder=" Ex: 1113*****" />
                       </div>
                    </div>
                    <div className="addnew-input-box">
                        <div className="boxp">
                       <label >Role</label>
                       </div>
                       <div className="add-inputs">
                       <div className="select-menu">
                                        <FormControl className="f-bg" size="large" fullWidth  >
                                            <InputLabel className="s-bg" >Select Role</InputLabel>
                                            <Select value={role} onChange={handleRole}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                            </div>
                            </div>
                    </div>
                    </form>
                </div>
                <div className="addnew-right">
                    <div className="employee-image">
                        <div className="image-e-top">
                            <h4>Employee Image Ratio (1:1)</h4>
                        </div>
                        <div className="image-show-box">
                            <div className="image-show">

                            </div>
                        </div>
                        <div className="image-size">
                        <div className="image-size-heading">
                            <h4>Employee Image Size Max 2 MB *</h4>
                        </div>
                        <div className="image-choose">
                            <input type="file"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-info">
                <div className="account-epp-info">
                   <div className="account-epp-top">
                    <div className="epp-heading">
                        <div className="epp-icon"><RiUserFill/></div>
                        <h3>Account Information</h3>
                    </div>
                   </div>
                   <div className="e-p-c">
                    <div className="e-box">
                        <div className="e-lable">
                            <lable>Email</lable>
                        </div>
                        <div className="e-input">
                            <input type="email"  placeholder="Ex: exa@gmail.com"/>
                        </div>
                    </div>
                    <div className="e-box">
                        <div className="e-lable">
                            <lable>Password</lable>
                            <div className="pass-war-icon"><PiWarningCircleBold/></div>
                        </div>
                        <div className="e-input">
                            <input type="email"  placeholder="Ex: exa@gmail.com"/>
                        </div>
                    </div>
                    <div className="e-box">
                        <div className="e-lable">
                            <lable>Confirm Password</lable>
                        </div>
                        <div className="e-input">
                            <input type="email"  placeholder="Ex: exa@gmail.com"/>
                        </div>
                    </div>
                   </div>
                   <div className="srbtn-box">
                                    <div className="r1btn">
                                        <Button className="rst-btn">Reset</Button>
                                        <Button className="subt-btn">Submit</Button>
                                    </div>
                                </div>
                </div>
            </div>
           </div>
        </div>
       <Footer/>
       </div>
       </div>
        </>
    )
}
export default AddNewEmployee;