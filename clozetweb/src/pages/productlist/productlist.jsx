import React, { useState, useEffect } from "react";
import "./productlist.css";
import { RiFilter3Fill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";
import { HiPencil } from "react-icons/hi2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Button,
  Switch,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControlLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGetProducts } from "../files";
import { useSelector } from "react-redux";
import { selectProducts } from "../files";
import axios from "axios";
import toast from "react-hot-toast";
import { deleteProduct } from "../files";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/productSlice";

const ProductList = () => {
  const [allCategoryItem, setAllCategoryItem] = useState("");
  const [allSubCategoryItem, setAllSubCategoryItem] = useState("");
  const [allItem, setAllItem] = useState("");

  const handleItemCategory = (event) => {
    setAllCategoryItem(event.target.value);
  };
  const handleSubItemCategory = (event) => {
    setAllSubCategoryItem(event.target.value);
  };
  const handleallItem = (event) => {
    setAllItem(event.target.value);
  };

  // const [loading, setLoading] = useState(true);
 // const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useGetProducts();
  const products  = useSelector(selectProducts);
  

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       axios.defaults.withCredentials = true;
  //       const res = await axios.get(`http://localhost:8080/api/v1/product/all`);
  //       console.log("Fetched response is", res);
  //       setProducts(res.data.items);
  //       console.log("Dispatched setProducts with:", res.data.items);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

 
   const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/products/delete/${id}`
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
      console.log(res);
      // Update product list after deletion
       dispatch(deleteProduct(id));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
   };

   const searchSubmitHandler = (e) => {
     e.preventDefault();
     const searchProduct = products?.find((product) =>
       product.name.toLowerCase().includes(search.toLowerCase())
     );
     if (searchProduct) {
       dispatch(setProducts([searchProduct]));
     } else {
       toast.error("User not found");
     }
     setSearch("");
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
                <span className="p-list">
                  <h3>{products.length}</h3>
                </span>
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
                    <FormControl className="f-bg" size="small" fullWidth>
                      <InputLabel className="s-bg">All Category</InputLabel>
                      <Select
                        value={allCategoryItem}
                        onChange={handleItemCategory}
                      >
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
                    <FormControl className="f-bg" size="small" fullWidth>
                      <InputLabel className="s-bg">All Category</InputLabel>
                      <Select
                        value={allSubCategoryItem}
                        onChange={handleSubItemCategory}
                      >
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
                    <FormControl className="f-bg" size="small" fullWidth>
                      <InputLabel className="s-bg">All</InputLabel>
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
                  <form action="" onSubmit={searchSubmitHandler}>
                    <div className="s-input">
                      <input
                        type="text"
                        placeholder="Search By Reference or Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <button type="submit">
                        <div className="icon-s">
                          <IoSearchSharp />
                        </div>
                      </button>
                    </div>
                  </form>

                  <div className="ex-select">
                    <Link to="/addItem">
                      <Button className="e-btn">
                        <span className="e-add-btn">
                          <CgAdd />
                        </span>
                        Add New Item
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="table-section">
                {
                  <table width="100%">
                    <thead>
                      <tr className="text-sm">
                        <th className="text-sm">SI</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Recommended</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.length > 0 ? (
                        products.map((product, index) => (
                          <tr key={product._id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>
                              <Switch checked={product.recommended} />
                            </td>
                            <td>
                              <Switch checked={product.status} />
                            </td>
                            <td className="ac-box">
                              <Link to="/addItem" state={{ product }}>
                                <Button className="hipen">
                                  <HiPencil />
                                </Button>
                              </Link>

                              <Button
                                onClick={(e) => handleDelete(e, product._id)}
                              >
                                <AiOutlineDelete />
                              </Button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7">
                            <p>No products available.</p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
