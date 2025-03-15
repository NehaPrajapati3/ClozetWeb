import React, { useState, useEffect } from "react";
import './productlist.css'
import { RiFilter3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { HiPencil } from "react-icons/hi2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { db } from "../firebase/firebase";
import {  collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Button, Switch, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

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
  
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({ 
        name: "",
        category: "",
        price: "",
        recommended: false,
        status: false,
    });
    
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "products"));
        setProducts(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
    };
    

    const handleAddOrUpdate = async () => {
        if (selectedProduct) {
            const productRef = doc(db, "products", selectedProduct.id);
            await updateDoc(productRef, newProduct);
        } else {
            await addDoc(collection(db, "products"), newProduct);
        }
        fetchProducts();
        handleClose();
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "products", id));
        fetchProducts();
    };

    const handleOpen = (product = null) => {
        setSelectedProduct(product);
        setNewProduct(product ? { ...product } : {
            name: "",
            category: "",
            price: "",
            recommended: false,
            status: false,
        });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProduct(null);
    };

      
       
      
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
                                        <input type="text" placeholder="Search By Refrence or Name" />
                                        <div className="icon-s">
                                            <IoSearchSharp />
                                        </div>
                                    </div>
                                    <div className="ex-select">
                                        <Button className="e-btn" onClick={() => handleOpen()}>
                                            <span className="e-add-btn"><CgAdd /></span>Add New Item
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-section">
                                {loading ? (
                                    <p>Loading products...</p> 
                                ) : (
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <th>SI</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th>Recommended</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product, index) => (
                                                <tr key={product.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.category}</td>
                                                    <td>${product.price}</td>
                                                    <td><Switch checked={product.recommended} disabled /></td>
                                                    <td><Switch checked={product.status} disabled /></td>
                                                    <td className="ac-box">
                                                        <Button className="hipen" onClick={() => handleOpen(product)}><HiPencil /></Button>
                                                        <Button onClick={() => handleDelete(product.id)}><AiOutlineDelete /></Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
                <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{selectedProduct ? "Edit Product" : "Add Product"}</DialogTitle>
                <DialogContent>
                    <TextField label="Name" fullWidth value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
                    <TextField label="Category" fullWidth value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
                    <TextField label="Price" fullWidth type="number" 
                        value={newProduct.price} 
                        onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 })} />
                    <Switch checked={newProduct.recommended} 
                        onChange={(e) => setNewProduct({ ...newProduct, recommended: e.target.checked })} />
                    <Switch checked={newProduct.status} 
                        onChange={(e) => setNewProduct({ ...newProduct, status: e.target.checked })} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddOrUpdate}>{selectedProduct ? "Update" : "Add"}</Button>
                </DialogActions>
            </Dialog>
            </div>
        </>
    )
}

export default ProductList;