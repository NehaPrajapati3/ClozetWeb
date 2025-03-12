import React, { useState } from "react";
import './productlist.css'
import { RiFilter3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { Button } from "@mui/material";
import { Switch } from '@mui/material';
import { HiPencil } from "react-icons/hi2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProductList = () => {
    const [allCategoryItem, setAllCategoryItem] = useState('')
    const [allSubCategoryItem, setAllSubCategoryItem] = useState('')
    const [allItem, setAllItem] = useState('');
   


    const handleItemCategory = (event) => {
        setAllCategoryItem(event.target.value);
    }
    const handleSubItemCategory = (event) => {
        setAllSubCategoryItem(event.target.value);
    }
    const handleallItem = (event) => {
        setAllItem(event.target.value);
    }

    
      
       
      
    return (
        <>
            <div className="product-section">
                <div className="product-header">
                    <div className="product-top">
                        <div className="product-heading">
                            <div className="product-list-icon">
                                <RiFilter3Fill />
                            </div>
                            <div className="top-heading">
                                <h2>Item List</h2>
                                <span className="p-list"><h3>0</h3></span>
                            </div>
                        </div>
                    </div>
                    <div className="search-list-box">
                        <div className="main-box">
                            <div className="top-box">
                                <h2>Search Data</h2>
                            </div>
                            <div className="category-item-list">
                                <div className="item-select-box">
                                    <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Category</InputLabel>
                                            <Select value={allCategoryItem} onChange={handleItemCategory}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                </div>
                                <div className="item-select-box">
                                    <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All Category</InputLabel>
                                            <Select value={allSubCategoryItem} onChange={handleSubItemCategory}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                </div>
                                <div className="item-select-box">
                                    <div className="select-menu">
                                        <FormControl className="f-bg" size="small" fullWidth  >
                                            <InputLabel className="s-bg" >All</InputLabel>
                                            <Select value={allItem} onChange={handleallItem}>

                                                <MenuItem value="">None</MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="list-table-section">
                        <div className="main-list-table-section-box">
                            <div className="main-list-s-top">

                                <div className="s-btn">
                                    <div className="s-input">
                                        <input type="text" placeholder="Search By Refrance or Name" />
                                        <div className="icon-s">
                                            <IoSearchSharp />
                                        </div>
                                    </div>
                                    <div className="ex-select">
                                        <Button className="e-btn">
                                            <span className="e-add-btn"><CgAdd /></span>Add New Item
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-section">
                                <table width="100%">
                                    <thead >
                                        <tr >
                                            <th>SI</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Recommended</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr align="center">
                                            <td>1</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td>Rice</td>
                                            <td>$ 160</td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>

                                            <td className="ac-box">
                                            <Button className="hipen"><HiPencil/></Button>
                                               <Button><AiOutlineDelete/></Button>
                                            </td>

                                        </tr>
                                      
                                           
                                        <tr align="center">
                                            <td>1</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td>Rice</td>
                                            <td>$ 160</td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>

                                            <td className="ac-box">
                                            <Button className="hipen"><HiPencil/></Button>
                                               <Button><AiOutlineDelete/></Button>
                                            </td>

                                        </tr>




                                      
                                       

                                        <tr align="center">
                                            <td>1</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td>Rice</td>
                                            <td>$ 160</td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>

                                            <td className="ac-box">
                                            <Button className="hipen"><HiPencil/></Button>
                                               <Button><AiOutlineDelete/></Button>
                                            </td>

                                        </tr>



                                      
                                        <tr align="center">
                                        <td>1</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td>Rice</td>
                                            <td>$ 160</td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>



                                        </tr>
                                        <tr align="center">

                                        <td>1</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td>Rice</td>
                                            <td>$ 160</td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>


                                        </tr>
                                        <tr align="center">
                                        <td>1</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td>Rice</td>
                                            <td>$ 160</td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>

                                            <td className="ac-box">
                                            <Button className="hipen"><HiPencil/></Button>
                                               <Button><AiOutlineDelete/></Button>
                                            </td>

                                        </tr>
                                        <tr align="center">
                                        <td>1</td>
                                            <td className="dit-img">
                                                <div className="fd-img">
                                                    <img src="./food_img/ice-choco.jpg" alt="" />

                                                </div>
                                                <div className="fed-heading">
                                                    <h3>Ice Choco</h3>
                                                </div>

                                            </td>
                                            <td>Rice</td>
                                            <td>$ 160</td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>
                                            <td>
                                            <Switch  defaultChecked />
                                            </td>

                                            <td className="ac-box">
                                               <Button className="hipen"><HiPencil/></Button>
                                               <Button><AiOutlineDelete/></Button>
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

export default ProductList;