import React, { useState, useEffect } from "react";
import "./addNewItem.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Button,
  Switch,
  FormControlLabel,
  TextField,
  Chip,
} from "@mui/material";
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

  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [sku, setSku] = useState("");
  const sizes = ["S", "M", "L", "XL"];

  let productId;
  const [newProduct, setNewProduct] = useState({
    name: productToEdit?.name || "",
    category: productToEdit?.category || "",
    subcategory: productToEdit?.subcategory || "",
    shortDesc: productToEdit?.shortDesc || "",
    detailedDesc: productToEdit?.detailedDesc || "",
    tags: productToEdit?.tags || [],
    brand: productToEdit?.brand || "",
    sku: productToEdit?.sku || "",
    sellingPrice: productToEdit?.sellingPrice || "",
    originalPrice: productToEdit?.originalPrice || "",
    discountType: productToEdit?.discountType || "",
    discountValue: productToEdit?.discountValue || "",
    taxIncluded: productToEdit?.taxIncluded ?? true,
    stock: productToEdit?.stock || {},
    stockStatus: productToEdit?.stockStatus || "",
    restockDate: productToEdit?.restockDate || "",
    image: productToEdit?.image || [],
    video: productToEdit?.video || "",
    returnPolicy: productToEdit?.returnPolicy || "",
    visibility: {
      newArrival: productToEdit?.visibility?.newArrival || false,
      trending: productToEdit?.visibility?.trending || false,
      hidden: productToEdit?.visibility?.hidden || false,
    },
    seoKeywords: productToEdit?.seoKeywords || "",
    buyerNotes: productToEdit?.buyerNotes || "",
    status: productToEdit?.status || "draft",
  });

  useEffect(() => {
    if (productToEdit) {
      setNewProduct({
        ...newProduct,
        name: productToEdit?.name || "",
        category: productToEdit?.category || "",
        subcategory: productToEdit?.subcategory || "",
        shortDesc: productToEdit?.shortDesc || "",
        detailedDesc: productToEdit?.detailedDesc || "",
        tags: productToEdit?.tags || [],
        brand: productToEdit?.brand || "",
        sku: productToEdit?.sku || "",
        sellingPrice: productToEdit?.sellingPrice || "",
        originalPrice: productToEdit?.originalPrice || "",
        discountType: productToEdit?.discountType || "",
        discountValue: productToEdit?.discountValue || "",
        taxIncluded: productToEdit?.taxIncluded ?? true,
        stock: productToEdit?.stock || {},
        stockStatus: productToEdit?.stockStatus || "",
        restockDate: productToEdit?.restockDate || "",
        image: productToEdit?.image || [],
        video: productToEdit?.video || "",
        returnPolicy: productToEdit?.returnPolicy || "",
        visibility: {
          newArrival: productToEdit?.visibility?.newArrival || false,
          trending: productToEdit?.visibility?.trending || false,
          hidden: productToEdit?.visibility?.hidden || false,
        },
        seoKeywords: productToEdit?.seoKeywords || "",
        buyerNotes: productToEdit?.buyerNotes || "",
        status: productToEdit?.status || "draft",
      });
    }
  }, [productToEdit]);

  const handleAutoGenerateSKU = (e, selectedSize) => {
    e.preventDefault();
   
    const sizeValue = newProduct.stock?.[selectedSize];

    if (
      !newProduct.category ||
      !newProduct.subcategory ||
      !sizeValue
    ) {
      toast.error(
        "Please fill category, subcategory, selected size, and ID to generate SKU."
      );
      return;
    }

    const newSku = `${newProduct.category
      .slice(0, 3)
      .toUpperCase()}-${newProduct.subcategory
      .slice(0, 3)
      .toUpperCase()}-${selectedSize.toUpperCase()}`;
    setSku(newSku);
    toast.success("SKU auto-generated.");
  };

  const handleStockChange = (size, value) => {
    setNewProduct((prev) => ({
      ...prev,
      stock: { ...prev.stock, [size]: value },
    }));
  };

 

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      const stringifyKeys = ["stock", "visibility"];

      for (const key in newProduct) {
        const value = newProduct[key];

        if (stringifyKeys.includes(key)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      }

      // for (const key in newProduct) {
      //   formData.append(key, newProduct[key]);
      // }

      // Add image file if selected
      if (imageFile) {
        formData.append("image", imageFile);
      }

      // Add video file if selected
      if (videoFile) {
        formData.append("video", videoFile);
      }

      let res;
      if (productToEdit?._id) {
        // Update product
        res = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/v1/products/edit/${productToEdit._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
      } else {
        // Add new product
        res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/v1/products/add`,
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
    setNewProduct({
      name: "",
      category: "",
      subcategory: "",
      shortDesc: "",
      detailedDesc: "",
      tags: [],
      brand: "",
      sku: "",
      sellingPrice: "",
      originalPrice: "",
      discountType: "",
      discountValue: "",
      taxIncluded: true,
      stock: {},
      stockStatus: "",
      restockDate: "",
      image: [],
      video: "",
      returnPolicy: "",
      visibility: {
        newArrival: false,
        trending: false,
        hidden: false,
      },
      seoKeywords: "",
      buyerNotes: "",
      status: "draft",
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
                      <h3>Name (Default)*</h3>
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
                      <h3>Short description (Default)*</h3>
                    </div>
                    <div className="description-input">
                      <textarea
                        type="text"
                        rows="3"
                        cols=""
                        value={newProduct.shortDesc}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            shortDesc: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="description-box">
                    <div className="description-heading">
                      <h3>Detailed description (Default)</h3>
                    </div>
                    <div className="description-input">
                      <textarea
                        type="text"
                        rows="3"
                        cols=""
                        value={newProduct.detailedDesc}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            detailedDesc: e.target.value,
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
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <div className="video-box">
                    <div className="video-heading">
                      <h3>
                        Video <span>(Ratio 1:1)</span>
                      </h3>
                    </div>
                    <div className="video-input">
                      <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => setVideoFile(e.target.files[0])}

                        // onChange={(e) =>
                        //   setNewProduct({
                        //     ...newProduct,
                        //     video: e.target.files[0],
                        //   })
                        // }
                      />
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
                  <div className="price-box">
                    <div className="price-heading">
                      <h3>Brand Name</h3>
                    </div>
                    <div className="price-input">
                      <input
                        type="text"
                        placeholder="Brand Name"
                        value={newProduct.brand}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            brand: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>Category*</h2>
                    </div>
                    <div className="select-menu">
                      <FormControl className="f-bg" size="small" fullWidth>
                        <InputLabel className="s-bg">Category</InputLabel>
                        <Select
                          value={newProduct.category || ""}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              category: e.target.value,
                            })
                          }
                        >
                          <MenuItem value="Men">Men</MenuItem>
                          <MenuItem value="Women">Women</MenuItem>
                          <MenuItem value="Kids">Kids</MenuItem>
                          <MenuItem value="Accessories">Accessories</MenuItem>
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
                          value={newProduct.subcategory || ""}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              subcategory: e.target.value,
                            })
                          }
                        >
                          <MenuItem value="T-Shirts">T-Shirts</MenuItem>
                          <MenuItem value="Jeans">Jeans</MenuItem>
                          <MenuItem value="Dresses">Dresses</MenuItem>
                          <MenuItem value="Footwear">Footwear</MenuItem>
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
                  <h2>Pricing And Discounts</h2>
                  <div className="main-box">
                    <div className="price-box">
                      <div className="price-heading">
                        <h3>Selling Price*</h3>
                      </div>
                      <div className="price-input">
                        <input
                          type="text"
                          placeholder="Enter Price"
                          value={newProduct.sellingPrice}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              sellingPrice: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="price-box">
                      <div className="price-heading">
                        <h3>Original Price</h3>
                      </div>
                      <div className="price-input">
                        <input
                          type="text"
                          placeholder="Enter Price"
                          value={newProduct.originalPrice}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              originalPrice: e.target.value,
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
                              value={newProduct.discountType || ""}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  discountType: e.target.value,
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
                          value={newProduct.discountValue}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              discountValue: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    {/* <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Price Includes GST</h3>
                      </div>
                      <div className="price-input">
                        <div className="mx-2">
                          <FormControlLabel
                            control={
                              <Switch
                                checked={newProduct.taxIncluded}
                                onChange={(e) =>
                                  setNewProduct({
                                    ...newProduct,
                                    taxIncluded: e.target.checked,
                                  })
                                }
                              />
                            }
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="amount-form-section">
              <div className="amount-form">
                <div className="top-box">
                  <h2>Stock And Availability</h2>
                  <div className="main-box">
                    <div className="price-box">
                      <div className="price-heading">
                        <h3>Stock & Sizes</h3>
                      </div>
                      <div className="price-input ml-1">
                        {sizes.map((size) => (
                          <div key={size}>
                            <label>{`${size}`}</label>
                            <input
                              type="number"
                              value={newProduct.stock?.[size] || ""}
                              onChange={(e) =>
                                handleStockChange(size, e.target.value)
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="category-item-list">
                      <div className="item-select-box">
                        <div className="price-heading">
                          <h3>Stock Status</h3>
                        </div>
                        <div className="select-menu">
                          <FormControl className="f-bg" size="small" fullWidth>
                            <InputLabel className="s-bg">
                              Stock Status
                            </InputLabel>
                            <Select
                              value={newProduct.stockStatus || ""}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  stockStatus: e.target.value,
                                })
                              }
                            >
                              <MenuItem value="In Stock">In Stock</MenuItem>
                              <MenuItem value="Out of Stock">
                                Out of Stock
                              </MenuItem>
                              <MenuItem value="Limited Stock">
                                Limited Stock
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Restock Date</h3>
                      </div>
                      <div className="price-input">
                        <input
                          type="date"
                          placeholder="Discount value"
                          value={newProduct.restockDate}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              restockDate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Price Includes GST</h3>
                      </div>
                      <div className="price-input">
                        <div className="mx-2">
                          <FormControlLabel
                            control={
                              <Switch
                                checked={newProduct.taxIncluded}
                                onChange={(e) =>
                                  setNewProduct({
                                    ...newProduct,
                                    taxIncluded: e.target.checked,
                                  })
                                }
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-details-box">
              <div className="main-box">
                <div className="top-box">
                  <h2>Shipping & Delivery Preferences</h2>
                </div>
                <div className="category-item-list">
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>Return & Exchange Policy</h2>
                    </div>
                    <div className="select-menu">
                      <FormControl className="f-bg" size="small" fullWidth>
                        <InputLabel className="s-bg">Return Policy</InputLabel>
                        <Select
                          value={newProduct.returnPolicy || ""}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              returnPolicy: e.target.value,
                            })
                          }
                        >
                          <MenuItem value="No Returns">No Returns</MenuItem>
                          <MenuItem value="Returns within 7 Days">
                            Returns within 7 Days
                          </MenuItem>
                          <MenuItem value="Exchange Available">
                            Exchange Available
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className="price-box">
                    <div className="price-heading">
                      <h3>SEO & Key Words</h3>
                    </div>
                    <div className="price-input">
                      <input
                        type="text"
                        placeholder=""
                        value={newProduct.seoKeywords}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            seoKeywords: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="item-select-box">
                    <div className="store-heading">
                      <h2>SKU / Product Code</h2>
                    </div>
                    <div className=" price-input flex  flex-row gap-2">
                      <input
                        label="SKU / Product Code"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        placeholder="e.g., MEN-JEA-BLU-M-00123"
                        sx={{ mb: 1 }}
                      />
                      <button
                        variant="outlined"
                        className=" border-2 bg-blend-color border-b-gray-900 bg-slate-400 h-11 text-sm"
                        onClick={handleAutoGenerateSKU}
                        sx={{ textTransform: "none" }}
                      >
                        Auto-Generate SKU
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="amount-form-section">
              <div className="amount-form">
                <div className="top-box">
                  <h2>Additional Settings</h2>
                  <div className="main-box">
                    <div className="price-box">
                      <div className="price-heading">
                        <h3>Visibility on App</h3>
                      </div>
                      <div className="price-input">
                        <FormControlLabel
                          control={
                            <Switch
                              checked={newProduct.visibility?.newArrival}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  visibility: {
                                    ...newProduct?.visibility,
                                    newArrival: e.target.checked,
                                  },
                                })
                              }
                            />
                          }
                          label="Show as New Arrival"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={newProduct.visibility?.trending}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  visibility: {
                                    ...newProduct?.visibility,
                                    trending: e.target.checked,
                                  },
                                })
                              }
                            />
                          }
                          label="Show in Trending"
                        />
                        <FormControlLabel
                          control={
                            <Switch
                              checked={newProduct.visibility?.hidden}
                              onChange={(e) =>
                                setNewProduct({
                                  ...newProduct,
                                  visibility: {
                                    ...newProduct.visibility,
                                    hidden: e.target.checked,
                                  },
                                })
                              }
                            />
                          }
                          label="Hide Product"
                        />
                      </div>
                    </div>

                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Custom Notes for Buyers</h3>
                      </div>
                      <div className="price-input">
                        <input
                          type="text"
                          placeholder=""
                          value={newProduct.buyerNotes}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              buyerNotes: e.target.value,
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
