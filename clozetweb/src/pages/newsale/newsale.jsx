import React from "react";
import "./newsale.css";
import { AiFillProduct } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGetOrders } from "../files";
import { useSelector } from "react-redux";
import { selectOrders } from "../files";

const Newsale = () => {
  const [store, setStore] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [customer, setCustomer] = React.useState("");

  const handleStore = (event) => {
    setStore(event.target.value);
  };

  const handleCategories = (event) => {
    setCategories(event.target.value);
  };

  const handleCustomer = (event) => {
    setCustomer(event.target.value);
  };

  useGetOrders();
  const orders = useSelector(selectOrders);

  return (
    <>
      <div className="newsale-section">
        <div className="newsale">
          <div className="product-left">
            <div className="product-heading">
              <AiFillProduct /> <h3>Product Section</h3>
            </div>
            <div className="select-items">
              <div className="select-menu">
                <FormControl className="f-bg" fullWidth>
                  <InputLabel className="s-bg">Select Store</InputLabel>
                  <Select value={store} onChange={handleStore}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="all-categries">
                <FormControl className="f-bg" fullWidth>
                  <InputLabel className="s-bg">All Categories</InputLabel>
                  <Select value={categories} onChange={handleCategories}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="search-tab">
              <div className="search-input">
                <input type="text " placeholder=" Ex..search " />
              </div>
              <div className="search-icon">
                <IoSearchSharp />
              </div>
            </div>

            <div className="no-product">
              <div className="see-products">
                <div className="main-or-table">
                  <table width="100%">
                    <thead>
                      <tr>
                        <th>SI</th>
                        <th>Order Id</th>
                        <th>Product Name</th>
                        <th>Order Date</th>
                        <th>Customer Information</th>
                        <th>Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.length > 0 ? (
                        orders
                          .filter((order) => order.orderStatus === "Confirmed")
                          .map((order, index) => (
                            <tr key={order._id}>
                              <td>{index + 1}</td>
                              <td>{order._id}</td>
                              <td>{order.productId?.name}</td>
                              <td>{order.createdAt}</td>
                              <td>{order.customerInformation}</td>
                              <td>{order.totalAmount}</td>
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
                </div>
              </div>
            </div>
          </div>
          <div className="billing-right">
            <div className="billing-heading">
              <LiaMoneyBillWaveSolid /> <h3>Billing Section</h3>
            </div>
            <div className="select-customer">
              <div className="customer">
                <FormControl className="f-bg" fullWidth>
                  <InputLabel className="s-bg">Select Coustomer</InputLabel>
                  <Select value={customer} onChange={handleCustomer}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="add-customer">
                <Button className="customer-btn">
                  <IoMdAddCircleOutline />
                  Add New Customer
                </Button>
              </div>
            </div>
            <div className="delivery-info">
              <div className="home-deli">
                {" "}
                <FaUser />{" "}
                <h4>
                  Delivery Information <span>(Home Delivery)</span>
                </h4>
              </div>
              <div className="pen">
                <HiPencil />
              </div>
            </div>
            <div className="table-bill">
              <table
                cellPadding={10}
                className="cart-table"
                border={1}
                rules="all"
              >
                <thead className="thead-border">
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="cartbill" align="center">
                  <tr align="center">
                    <td>Item 1</td>
                    <td>1</td>
                    <td>$15</td>
                    <td>
                      <button className="table-btn" type="button">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Addon:</td>
                    <td colSpan={2}>$0</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Subtotal (tax included):</td>
                    <td colSpan={2}>$0</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Discount:</td>
                    <td colSpan={2}>$0</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Delivery Fee:</td>
                    <td colSpan={2}>$0</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Total:</strong>
                    </td>
                    <td colSpan={2}>
                      <strong>$0</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pay-method">
              <h3>Payment Method</h3>
            </div>
            <div className="place-cart">
              <div className="placebtn">
                <Button className="pbtn">Place order</Button>
              </div>
              <div className="clean-cart">
                <Button className="cbtn">Clear cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsale;
