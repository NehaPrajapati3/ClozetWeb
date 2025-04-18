import React, { useState, useEffect } from "react";
import "./subCategory.css";
import { CgAdd } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { HiPencil } from "react-icons/hi2";
import {
  Switch,
  Button,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import {
  selectSubCategories,
  selectSubCategoryToEdit,
} from "../../redux/selectors";
import { selectCategories, selectCategoryToEdit } from "../../redux/selectors";
import {
  setSubCategoryToEdit,
  clearSubCategoryToEdit,
  deleteSubCategory,
} from "../../redux/subCategorySlice";
import axios from "axios";
import toast from "react-hot-toast";
import useGetSubCategories from "../../hooks/useGetSubcategories";
import useGetCategories from "../../hooks/useGetCategories";

function SubCategory() {
  const [imageFile, setImageFile] = useState(null);
  const [sizeChartFile, setSizeChartFile] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = (subCategory) => {
    dispatch(setSubCategoryToEdit(subCategory));
  };

  const subCategoryToEdit = useSelector(selectSubCategoryToEdit);

  const [newSubCategory, setNewSubCategory] = useState({
    subCategoryId: subCategoryToEdit?.subCategoryId || "",
    subCategoryName: subCategoryToEdit?.subCategoryName || "",
    subCategoryStatus: subCategoryToEdit?.subCategoryStatus || false,
    image: subCategoryToEdit?.image || [],
    sizeChart: subCategoryToEdit?.sizeChart || [],
    mainCategoryName: subCategoryToEdit?.mainCategoryName || "",
  });

  useEffect(() => {
    if (subCategoryToEdit) {
      setNewSubCategory({
        ...newSubCategory,
        subCategoryId: subCategoryToEdit?.subCategoryId || "",
        subCategoryName: subCategoryToEdit?.subCategoryName || "",
        subCategoryStatus: subCategoryToEdit?.subCategoryStatus || false,
        image: subCategoryToEdit?.image || [],
        sizeChart: subCategoryToEdit?.sizeChart || [],
        mainCategoryName: subCategoryToEdit?.mainCategoryName || "",
      });
    }
  }, [subCategoryToEdit]);

  

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();

    try {
      console.log(`newSubCategory is: ${newSubCategory}`);

      const formData = new FormData();

      for (const key in newSubCategory) {
        const value = newSubCategory[key];
        formData.append(key, value);
      }

      if (imageFile) {
        formData.append("image", imageFile);
      }
      if (sizeChartFile) {
        formData.append("sizeChart", sizeChartFile);
      }

      for (let pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      let res;
      if (subCategoryToEdit?._id) {
          console.log("subCategoryToEdit inside if:", ...formData);
        // Update Coupon
        res = await axios.put(
          `${process.env.REACT_APP_API_URL}/api/v1/subCategory/edit/${subCategoryToEdit._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
      } else {
        // Add new Coupon
        res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/v1/subCategory/add`,
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
    setNewSubCategory({
      subCategoryId: "",
      subCategoryName: "",
      subCategoryStatus: false,
      image: [],
      sizeChart: [],
      mainCategoryName: "",
    });

    dispatch(clearSubCategoryToEdit());
  };

  // const { refetchSubCategories } = useGetSubCategories();
  // const subCategories = useSelector(selectSubCategories);
  // useEffect(() => {
  //   // Re-fetch categories when a category is added/updated
  //   refetchSubCategories();
  // }, [handleAddOrUpdate]);

  useGetSubCategories();
  const subCategories = useSelector(selectSubCategories);
  console.log("subCategories:", subCategories);

  // const { refetchCategories } = useGetCategories();
  // const categories = useSelector(selectCategories);
  // useEffect(() => {
  //   // Re-fetch categories when a category is added/updated
  //   refetchCategories();
  // }, [handleAddOrUpdate]);

  useGetCategories();
  const categories = useSelector(selectCategories);
  console.log("Categories to select:", categories);

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/v1/subCategory/delete/${id}`
      );
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
      console.log(res);
      // Update category list after deletion
      dispatch(deleteSubCategory(id));
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const handleReset = async () => {
    setNewSubCategory({
      subCategoryId: "",
      subCategoryName: "",
      subCategoryStatus: false,
      image: [],
      sizeChart: [],
      mainCategoryName: "",
    });
  };

  return (
    <>
      <div className="coupon-section">
        <div className="coupon-header">
          <div className="coupon-top">
            <div className="coupon-heading">
              <div className="c-add-icon">
                <CgAdd />
              </div>{" "}
              <h2>Add New Category</h2>
            </div>
          </div>
          <div className="coupon-form-section">
            <form
              action=""
              encType="multipart/form-data"
              onSubmit={(e) => handleAddOrUpdate(e)}
            >
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

                <div className="title-box2">
                  <div className="wrap-part">
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Category</h3>
                      </div>
                      <div className="title-c-select">
                        <div className="select-menu">
                          <FormControl className="f-bg" fullWidth>
                            <InputLabel className="s-bg">
                              All Category
                            </InputLabel>
                            <Select
                              value={newSubCategory.mainCategoryName}
                              onChange={(e) =>
                                setNewSubCategory({
                                  ...newSubCategory,
                                  mainCategoryName: e.target.value,
                                })
                              }
                            >
                              {categories.map((category, index) => (
                                <MenuItem
                                  key={index}
                                  value={category?.categoryName || ""}
                                >
                                  {category?.categoryName || "Unnamed"}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Sub Category Name</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          type="text"
                          placeholder=""
                          value={newSubCategory.subCategoryName}
                          onChange={(e) =>
                            setNewSubCategory({
                              ...newSubCategory,
                              subCategoryName: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Item Image</h3>
                      </div>
                      <div className="title-c-select">
                        <input
                          name="image"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setImageFile(e.target.files[0])}
                        />

                        <input
                          className="ml-4"
                          name="sizeChart"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setSizeChartFile(e.target.files[0])}
                        />
                      </div>
                    </div>
                    {/* <div className="t-box-1">
                      <div className="type-heading">
                        <h3>Size Chart Image</h3>
                      </div>
                      <div className="title-c-select"></div>
                    </div> */}

                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Sub Category Status</h3>
                      </div>
                      <div className="price-input">
                        <div className="mx-2">
                          <FormControlLabel
                            control={
                              <Switch
                                checked={newSubCategory.subCategoryStatus}
                                onChange={(e) =>
                                  setNewSubCategory({
                                    ...newSubCategory,
                                    subCategoryStatus: e.target.checked,
                                  })
                                }
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="discount-box">
                      <div className="discount-heading">
                        <h3>Featured</h3>
                      </div>
                      <div className="price-input">
                        <div className="mx-2">
                          <FormControlLabel
                            control={
                              <Switch
                                checked={newSubCategory.featured}
                                onChange={(e) =>
                                  setNewSubCategory({
                                    ...newSubCategory,
                                    featured: e.target.checked,
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
                <div className="title-box4">
                  <div className="title-btn-box">
                    <Button className="rst-btn" onClick={handleReset}>
                      Reset
                    </Button>
                    <Button className="subt-btn" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="coupon-table">
            <div className="c-table-header">
              <div className="c-table-top">
                <div className="c-table-heading">
                  <h2>Sub Category List</h2>
                  <span>{subCategories.length}</span>
                </div>
                <div className="search-title-code">
                  <div className="s-input">
                    <input
                      type="text"
                      placeholder="Search By Refrance or Name"
                    />
                    <div className="icon-s">
                      <IoSearchSharp />
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-coupon-box">
                <table width="100%">
                  <thead>
                    <tr>
                      <th>SI</th>
                      <th>Main Category</th>
                      <th>Sub Category ID</th>
                      <th>Sub Category Image</th>
                      <th>Size Chart Image</th>
                      <th>Sub Category Name</th>
                      <th>Status</th>

                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subCategories?.length > 0 ? (
                      subCategories.map((subCategory, index) => (
                        <tr align="center" key={subCategory._id || index}>
                          <td>{index + 1}</td>
                          <td>{subCategory.mainCategoryId?.categoryName}</td>
                          <td>{subCategory.subCategoryId}</td>
                          <td>
                            {subCategory.subCategoryImageUrl ? (
                              <img
                                src={subCategory.subCategoryImageUrl}
                                alt={subCategory.subCategoryName}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "3px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <span className="no-image">No Image</span>
                            )}
                          </td>
                          <td>
                            {subCategory.subCategorySizeChartUrl ? (
                              <img
                                src={subCategory.subCategorySizeChartUrl}
                                alt={subCategory.subCategoryName}
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "3px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <span className="no-image">No Image</span>
                            )}
                          </td>
                          <td>{subCategory.subCategoryName}</td>
                          <td>
                            <label>
                              <Switch checked={subCategory.subCategoryStatus} />
                            </label>
                          </td>

                          <td className="ac-box">
                            <Button
                              className="hipen"
                              onClick={(e) => {
                                e.preventDefault();
                                handleEdit(subCategory);
                              }}
                            >
                              <HiPencil />
                            </Button>

                            <Button
                              onClick={(e) => handleDelete(e, subCategory._id)}
                            >
                              <AiOutlineDelete />
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="12" align="center">
                          No categories found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubCategory;
