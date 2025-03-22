import React, { useState } from "react";
import './coupons.css'
import { CgAdd } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from "@mui/material";
import { LuEye } from "react-icons/lu";


const Coupons = () => {

  const [coupontype, setCouponType] = useState('');

  const handleCouponType = (event) => {
    setCouponType(event.target.value)
  }
  return (
    <>
      <div className="coupon-section">
        <div className="coupon-header">
          <div className="coupon-top">
            <div className="coupon-heading">
              <div className="c-add-icon"><CgAdd /></div>  <h2>Add New Coupon</h2>
            </div>
          </div>
          <div className="coupon-form-section">
            <div className="coupon-form">
              <div className="default-top">
                <div className="default-heading">
                  <div className="d-1">
                    <h3>Default</h3>
                  </div>
                  <div className="e-1">
                    <h3>English</h3>
                  </div>

                </div>
              </div>
              <div className="title-box">
                <div className="title-heading">
                  <h3>Title (Default)</h3>
                </div>
                <div className="title-input">
                  <input type="text" placeholder="New Coupon" />
                </div>
              </div>
              <div className="title-box2">
                <div className="wrap-part">
                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Coupon type</h3>
                    </div>
                    <div className="title-c-select">
                      <div className="select-menu">
                        <FormControl className="f-bg" fullWidth   >
                          <InputLabel className="s-bg" >All Category</InputLabel>
                          <Select value={coupontype} onChange={handleCouponType}>

                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>


                      </div>
                    </div>
                  </div>
                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Code</h3>
                    </div>
                    <div className="title-c-select">
                      <input type="text" placeholder="ch93jkad" />
                    </div>
                  </div>
                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Limit for same user</h3>
                    </div>
                    <div className="title-c-select">
                      <input type="number" placeholder="Ex : 10" />
                    </div>
                  </div>
                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Start date</h3>
                    </div>
                    <div className="title-c-select">
                      <input type="date" placeholder="Ex : 10" />
                    </div>
                  </div>


                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Expire date</h3>
                    </div>
                    <div className="title-c-select">
                      <input type="date" placeholder="Ex : 10" />
                    </div>
                  </div>
                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Discount type</h3>
                    </div>

                    <div className="title-c-select">
                      <div className="select-menu">
                        <FormControl className="f-bg" fullWidth   >
                          <InputLabel className="s-bg" >Amount ($)</InputLabel>
                          <Select value={coupontype} onChange={handleCouponType}>

                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>


                      </div>
                    </div>
                  </div>

                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Discount</h3>
                    </div>
                    <div className="title-c-select">
                      <input type="number" placeholder="ch93jkad" />
                    </div>
                  </div>
                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Max discount</h3>
                    </div>
                    <div className="title-c-select">
                      <input type="number" placeholder="0" />
                    </div>
                  </div>
                  <div className="t-box-1">
                    <div className="type-heading">
                      <h3>Min purches</h3>
                    </div>
                    <div className="title-c-select">
                      <input type="number" placeholder="0" />
                    </div>
                  </div>
                </div>


              </div>
              <div className="title-box4">
                <div className="title-btn-box">
                  <Button className="rst-btn">Reset</Button>
                  <Button className="subt-btn">Submit</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="coupon-table">
            <div className="c-table-header">
              <div className="c-table-top">
                <div className="c-table-heading">
                  <h2>Coupon List</h2><span>0</span>
                </div>
                <div className="search-title-code">
                  <div className="s-input">
                    <input type="text" placeholder="Search By Refrance or Name" />
                    <div className="icon-s">
                      <IoSearchSharp />
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-coupon-box">
                <table width="100%">
                  <thead >
                    <tr >
                      <th>SI</th>
                      <th>Title</th>
                      <th>Coupon Type</th>
                      <th>Code</th>
                      <th>Limit for same user</th>
                      <th>Start Date</th>
                      <th>Expire Date</th>
                      <th>Discount Type</th>
                      <th>Discount</th>
                      <th>Max Discount</th>
                      <th>Min purchase</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <td>10%</td>
                      <td>50%</td>
                      <td>0</td>
                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>

                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>

                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>

                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>

                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>

                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>
                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


                      <td className="ac-box">
                        <Button className="hipen"><LuEye /></Button>

                      </td>
                    </tr>
                    <tr align="center">

                      <td >1</td>
                      <td >Deliveryman</td>
                      <td ></td>
                      <td >sdfj3434 </td>
                      <td></td>
                      <td>12-03-2025</td>
                      <td>25-03-2025</td>
                      <td></td>
                      <th>10%</th>
                      <th>50%</th>
                      <th>0</th>


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
export default Coupons;