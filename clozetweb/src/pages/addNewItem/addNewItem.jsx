import React, { useState, useEffect } from "react";
import "./addNewItem.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Switch } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

function AddNewItem() {
  // const [allCategoryItem, setAllCategoryItem] = useState("");
  // const [allSubCategoryItem, setAllSubCategoryItem] = useState("");
  // const [allItem, setAllItem] = useState("");

  // const handleItemCategory = (event) => {
  //   setAllCategoryItem(event.target.value);
  // };
  // const handleSubItemCategory = (event) => {
  //   setAllSubCategoryItem(event.target.value);
  // };
  // const handleallItem = (event) => {
  //   setAllItem(event.target.value);
  // };
   const location = useLocation();
   const productToEdit = location.state?.product || null;

  const [newProduct, setNewProduct] = useState({
    name: productToEdit?.name || "",
    description: productToEdit?.description || "",
    tags: productToEdit?.tags || "",
    store: productToEdit?.store || "",
    category: productToEdit?.category || "",
    subCategory: productToEdit?.subCategory || "",
    price: productToEdit?.price || "",
    amountType: productToEdit?.amountType || "",
    discount: productToEdit?.discount || "",
    recommended: productToEdit?.recommended || false,
    status: productToEdit?.status || false,
  });

 useEffect(() => {
   if (productToEdit) {
     setNewProduct(
      // productToEdit
         {
          name: productToEdit.name || "",
          description: productToEdit.description || "",
          tags: productToEdit.tags || "",
          store: productToEdit.store || "",
          category: productToEdit.category || "",
          subCategory: productToEdit.subCategory || "",
          price: productToEdit.price || "",
          amountType: productToEdit.amountType || "",
          discount: productToEdit.discount || "",
          recommended: productToEdit.recommended || false,
          status: productToEdit.status || false,
        }
     );
   }
 }, [productToEdit]);

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (productToEdit?._id) {
        // Update product if _id exists
        res = await axios.put(
          `http://localhost:8080/api/v1/product/edit/${productToEdit._id}`,
          newProduct,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
      } else {
        // Add product if no _id
        res = await axios.post(
          "http://localhost:8080/api/v1/product/add",
          newProduct,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
      }

      if (res.data.success) {
        toast.success(res.data.message);
      }

      console.log(res);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
      console.log(error);
    }

    // Reset newProduct after submission
    setNewProduct({
      name: "",
      description: "",
      tags: "",
      store: "",
      category: "",
      subCategory: "",
      price: "",
      amountType: "",
      discount: "",
      recommended: false,
      status: false,
    });
  };





  return (
    <>
      <div className="add-section">
        <div className="add-header">
          <div className="add-top">
            <div className="add-heading">
              <div className="add-img">
                <img src="./images/order-delivery.png" alt="" />
              </div>
              <div className="top-heading">
                <h2>Add New Item</h2>
              </div>
            </div>
          </div>
          <form
            className="main-add-form"
            encType="multipart/form-data"
            onSubmit={(e) => {
              handleAddOrUpdate(productToEdit?._id);
            }}
          >
            <div className="add-form-section">
              <div className="add-form-left-section">
                <div className="add-form">
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
                  <div className="name-box">
                    <div className="name-heading">
                      <h3>Name (Default)</h3>
                    </div>
                    <div className="name-input">
                      <input
                        type="text"
                        placeholder="New Item Name"
                        value={newProduct.name}
                        onChange={(e) =>
                          setNewProduct({ ...newProduct, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="description-box">
                    <div className="description-heading">
                      <h3>Short description (Default)</h3>
                    </div>
                    <div className="description-input">
                      <textarea
                        type="text"
                        rows="3"
                        cols=""
                        value={newProduct.description}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-form-right-section">
                <div className="add-form">
                  <div className="img-box">
                    <div className="img-heading">
                      <h3>
                        Item Image <span>*(Ratio 1:1)</span>
                      </h3>
                    </div>
                    <div className="img-input">
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                      ></input>
                    </div>
                  </div>
                  <div className="video-box">
                    <div className="video-heading">
                      <h3>
                        Video <span>*(Ratio 1:1)</span>
                      </h3>
                    </div>
                    <div className="video-input">
                      <input
                        type="file"
                        id="video"
                        name="video"
                        accept="video/*"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="description-box">
                  <div className="description-heading">
                    <h3>Tags</h3>
                  </div>
                  <div className="description-input">
                    <textarea
                      type="text"
                      rows="3"
                      cols=""
                      value={newProduct.tags}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          tags: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="item-details-box">
              <div className="main-box">
                <div className="top-box">
                  <h2>Item Details</h2>
                </div>
                <div className="category-item-list">
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>Store</h2>
                    </div>
                    <div className="select-menu">
                      <FormControl className="f-bg" size="small" fullWidth>
                        <InputLabel className="s-bg">Select Store</InputLabel>
                        <Select
                          value={newProduct.store}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              store: e.target.value,
                            })
                          }
                        >
                          <MenuItem value="none">None</MenuItem>
                          <MenuItem value="ten">Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>Category</h2>
                    </div>
                    <div className="select-menu">
                      <FormControl className="f-bg" size="small" fullWidth>
                        <InputLabel className="s-bg">Category</InputLabel>
                        <Select
                          value={newProduct.category}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              category: e.target.value,
                            })
                          }
                        >
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>Sub Category</h2>
                    </div>
                    <div className="select-menu">
                      <FormControl className="f-bg" size="small" fullWidth>
                        <InputLabel className="s-bg">Sub Category</InputLabel>
                        <Select
                          value={newProduct.subCategory}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              subCategory: e.target.value,
                            })
                          }
                        >
                          <MenuItem value={0}>None</MenuItem>
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
            <div className="amount-form-section">
              <div className="amount-form">
                <div className="top-box">
                  <h2>Amount</h2>
                  <div className="main-box">
                    <div className="price-box">
                      <div className="price-heading">
                        <h3>Price</h3>
                      </div>
                      <div className="price-input">
                        <input
                          type="text"
                          placeholder="Enter Price"
                          value={newProduct.price}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              price: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="category-item-list">
                      <div className="item-select-box">
                        <div className="price-heading">
                          <h3>Discount Type</h3>
                        </div>
                        <div className="select-menu">
                          <FormControl className="f-bg" size="small" fullWidth>
                            <InputLabel className="s-bg">Percentage</InputLabel>
                            <Select
                              value={newProduct.amountType}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  amountType: e.target.value,
                                })
                              }
                            >
                              <MenuItem value="percentage">Percentage</MenuItem>
                              <MenuItem value="amount">Amount</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Discount</h3>
                      </div>
                      <div className="price-input">
                        <input
                          type="text"
                          placeholder="Discount value"
                          value={newProduct.discount}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              discount: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="title-box4">
              <div className="mx-8">
                <label className=" font-semibold">Recommended</label>
                <Switch
                  checked={newProduct.recommended}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      recommended: e.target.checked,
                    })
                  }
                />
              </div>
              <div className="mx-8 mr-40">
                <label className=" font-semibold">Status</label>
                <Switch
                  checked={newProduct.status}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      status: e.target.checked,
                    })
                  }
                />
              </div>

              <div className="title-btn-box">
                <Button
                  className="subt-btn font-semibold text-slate-950"
                  type="submit"
                  
                  onClick={(e) => handleAddOrUpdate(e, productToEdit?._id)}
                >
                  {productToEdit?._id ? "Update Product" : "Add Product"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewItem;
