import React, {useState, useEffect} from "react";
import './addnewemployee.css'
import { LuUserRoundCog } from "react-icons/lu";
import { RiUserFill } from "react-icons/ri";
import { PiWarningCircleBold } from "react-icons/pi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material"; 
import Footer from '../footer/footer';
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const AddNewEmployee = ()=>{
     const [role, setRole] = React.useState('');
       
           const handleRole = (event) => {
               setRole(event.target.value);
           }

     const location = useLocation();
     const employeeToEdit = location.state?.employee || null;
     const [imageFile, setImageFile] = useState(null);

     const [newemployee, setNewemployee] = useState({
       firstName: employeeToEdit?.firstName || "",
       lastName: employeeToEdit?.lastName || "",
       phone: employeeToEdit?.phone || "",
       role: employeeToEdit?.role || "",
       email: employeeToEdit?.email || "",
       password: employeeToEdit?.password || "",
       confirmPassword: employeeToEdit?.confirmPassword || "",
       image: employeeToEdit?.image || "", 
       
     });

     useEffect(() => {
       if (employeeToEdit) {
         setNewemployee({
           ...newemployee,
           firstName: employeeToEdit.firstName || "",
           lastName: employeeToEdit.lastName || "",
           phone: employeeToEdit.phone || "",
           role: employeeToEdit.role || "",
           email: employeeToEdit.email || "",
           password: employeeToEdit.password || "",
           confirmPassword: employeeToEdit.confirmPassword || "",
           image: employeeToEdit.image || "",
         });
       }
     }, [employeeToEdit]);

     const handleAddOrUpdate = async (e) => {
       e.preventDefault();

       try {
         const formData = new FormData();
         for (const key in newemployee) {
           formData.append(key, newemployee[key]);
         }

         // Add image file if selected
         if (imageFile) {
           formData.append("image", imageFile);
         }
         let res;
         if (employeeToEdit?._id) {
           // Update employee
           res = await axios.put(
             `http://localhost:8080/api/v1/employee/editEmployee/${employeeToEdit._id}`,
             formData,
             {
               headers: { "Content-Type": "multipart/form-data" },
               withCredentials: true,
             }
           );
         } else {
           // Add new employee
           res = await axios.post(
             "http://localhost:8080/api/v1/employee/addEmployee",
             formData,
             {
               headers: { "Content-Type": "multipart/form-data" },
               withCredentials: true,
             }
           );
         }

         if (res.data.success) {
           toast.success(res.data.message);
         }
       } catch (error) {
         toast.error(error?.response?.data?.message || "Something went wrong!");
         console.log(error);
       }

       // Reset form after submission
       setNewemployee({
         firstName: "",
         phone: "",
         role: "",
         email: "",
         password: "",
         confirmPassword: "",
         image: "",
       });
     };

    return(
        <>
       <div classfirstName="addnew-employee-section">
       <div classfirstName="addnew-employee-header">
        <div classfirstName="addnew-e-top">
          <div classfirstName="addnew-e-heading">
            <div classfirstName="addnew-e-icon"><LuUserRoundCog/></div>
            <h2>Add New Employee</h2>
          </div>
        </div>
        <div classfirstName="e-genral-info-box">
           <div classfirstName="e-genral-info">
            <div classfirstName="e-genral-info-top">
                <div classfirstName="e-genral-heading">
                    <div classfirstName="e-genral-icon"><RiUserFill/></div>
                    <h3>Genral Information</h3>
                </div>
            </div>
            <div classfirstName="addnew-e-form-box">
                <div classfirstName="addnew-left">
                    <form>
                    <div classfirstName="addnew-input-box">
                        <div classfirstName="boxf">
                       <label >First Name</label>
                       </div>
                       <div classfirstName="add-input">
                        <input type="text" placeholder=" " />
                       </div>
                    </div>
                    <div classfirstName="addnew-input-box">
                        <div classfirstName="boxf">
                       <label >Last Name</label>
                       </div>
                       <div classfirstName="add-input">
                        <input type="text" placeholder=" Ex: Sakeel Ameer" />
                       </div>
                    </div>
                    <div classfirstName="addnew-input-box">
                        <div classfirstName="boxp">
                       <label >Phone</label>
                       </div>
                       <div classfirstName="add-input">
                        <input type="text" placeholder=" Ex: 1113*****" />
                       </div>
                    </div>
                    <div classfirstName="addnew-input-box">
                        <div classfirstName="boxp">
                       <label >Role</label>
                       </div>
                       <div classfirstName="add-inputs">
                       <div classfirstName="select-menu">
                                        <FormControl classfirstName="f-bg" size="large" fullWidth  >
                                            <InputLabel classfirstName="s-bg" >Select Role</InputLabel>
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
                <div classfirstName="addnew-right">
                    <div classfirstName="employee-image">
                        <div classfirstName="image-e-top">
                            <h4>Employee Image Ratio (1:1)</h4>
                        </div>
                        <div classfirstName="image-show-box">
                            <div classfirstName="image-show">

                            </div>
                        </div>
                        <div classfirstName="image-size">
                        <div classfirstName="image-size-heading">
                            <h4>Employee Image Size Max 2 MB *</h4>
                        </div>
                        <div classfirstName="image-choose">
                            <input type="file"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div classfirstName="account-info">
                <div classfirstName="account-epp-info">
                   <div classfirstName="account-epp-top">
                    <div classfirstName="epp-heading">
                        <div classfirstName="epp-icon"><RiUserFill/></div>
                        <h3>Account Information</h3>
                    </div>
                   </div>
                   <div classfirstName="e-p-c">
                    <div classfirstName="e-box">
                        <div classfirstName="e-lable">
                            <lable>Email</lable>
                        </div>
                        <div classfirstName="e-input">
                            <input type="email"  placeholder="Ex: exa@gmail.com"/>
                        </div>
                    </div>
                    <div classfirstName="e-box">
                        <div classfirstName="e-lable">
                            <lable>Password</lable>
                            <div classfirstName="pass-war-icon"><PiWarningCircleBold/></div>
                        </div>
                        <div classfirstName="e-input">
                            <input type="email"  placeholder="Ex: exa@gmail.com"/>
                        </div>
                    </div>
                    <div classfirstName="e-box">
                        <div classfirstName="e-lable">
                            <lable>Confirm Password</lable>
                        </div>
                        <div classfirstName="e-input">
                            <input type="email"  placeholder="Ex: exa@gmail.com"/>
                        </div>
                    </div>
                   </div>
                   <div classfirstName="srbtn-box">
                                    <div classfirstName="r1btn">
                                        <Button classfirstName="rst-btn">Reset</Button>
                                        <Button classfirstName="subt-btn">Submit</Button>
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