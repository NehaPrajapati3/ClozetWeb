import React, {useState, useEffect} from "react";
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
import toast from "react-hot-toast";
import axios from "axios";

const Newsale = () => {
  const [store, setStore] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [customer, setCustomer] = React.useState("");
  const [cart, setCart] = useState([]);

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

  

  // Add item to cart
  const addToCart = (order) => {
    setCart([...cart, { ...order, quantity: 1 }]);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Update total price calculations
 const calculateTotal = () => {
   let subtotal = 0;
   let totalDiscount = 0;
   let discountType = "";
   let discountValue = ""; // Store discount value dynamically

   cart.forEach((item) => {
     const price = item.productId?.price || 0;
     const discount = item.productId?.discount || 0;
     const itemDiscountType = item.productId?.discountType;
     let discountedPrice = price;
     let itemDiscount = 0;

     if (itemDiscountType === "percentage") {
       itemDiscount = (price * discount) / 100;
       discountedPrice = price - itemDiscount;
       discountType = "percentage";
       discountValue = `${discount}%`; // Store as percentage
     } else if (itemDiscountType === "amount") {
       itemDiscount = discount;
       discountedPrice = Math.max(0, price - itemDiscount);
       discountType = "amount";
       discountValue = `₹${discount.toFixed(2)}`; // Store as amount
     }

     subtotal += discountedPrice * item.quantity;
     totalDiscount += itemDiscount * item.quantity;
   });

   let deliveryFee = cart.length > 0 ? 50 : 0;
   let total = subtotal + deliveryFee;

   return {
     subtotal: subtotal || 0,
     discount: totalDiscount || 0,
     discountValue: discountValue || "0", // Store actual discount value
     deliveryFee: deliveryFee || 0,
     total: total || 0,
   };
 };




  const totals = calculateTotal();

  return (
    <>
      <div className="newsale-section">
        <div className="newsale">
          {/* Product Section */}
          <div className="product-left">
            <div className="product-heading">
              <AiFillProduct /> <h3>Product Section</h3>
            </div>

            {/* Search Bar */}
            <div className="search-tab">
              <div className="search-input">
                <input type="text" placeholder="Search..." />
              </div>

              <div className="search-icon">
                <IoSearchSharp />
              </div>
            </div>

            {/* Product List */}
            
              <div className="see-products">
                <table width="100%">
                  <thead>
                    <tr>
                      <th>SI</th>
                      <th>Order ID</th>
                      <th>Product Name</th>
                      <th>Order Date</th>
                      <th>Customer</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length > 0 ? (
                      orders
                        .filter((order) => order.orderStatus === "Confirmed")
                        .map((order, index) => (
                          <tr align="center" key={order._id}>
                            <td>{index + 1}</td>
                            <td>{order._id}</td>
                            <td>{order.productId?.name || "N/A"}</td>
                            <td>
                              {new Date(order.createdAt).toLocaleDateString()}
                            </td>
                            <td>{order.customerInformation}</td>
                            <td>
                              ₹{order.productId?.price?.toFixed(2) || "0.00"}
                            </td>
                            <td>
                              <Button onClick={() => addToCart(order)}>
                                Add to Cart
                              </Button>
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td colSpan="7">No products available.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            
          </div>

          {/* Billing Section */}
          <div className="billing-right">
            <div className="billing-heading">
              <LiaMoneyBillWaveSolid /> <h3>Billing Section</h3>
            </div>

            {/* <div className="select-customer">
              <div className="customer">
                <FormControl className="f-bg" fullWidth>
                  <InputLabel className="s-bg">Select Customer</InputLabel>
                  <Select value={customer} onChange={handleCustomer}>
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="customer1">Customer 1</MenuItem>
                    <MenuItem value="customer2">Customer 2</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="add-customer">
                <Button className="customer-btn">
                  <IoMdAddCircleOutline /> Add New Customer
                </Button>
              </div>
            </div> */}

            <div className="billing-heading see-products">
              <table width="100%">
                <thead>
                  <tr className="gap-3">
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr align="center" key={index}>
                      <td>{item.productId?.name || "N/A"}</td>
                      <td>{item.quantity}</td>
                      <td>₹{item.productId?.price?.toFixed(2) || "0.00"}</td>
                      <td>
                        <button
                          className="table-btn"
                          onClick={() => removeFromCart(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="delivery-info">
              <div className="home-deli">
                <FaUser />{" "}
                <h4>
                  Delivery Information <span>(Home Delivery)</span>
                </h4>
              </div>
              <div className="pen">
                <HiPencil />
              </div>
            </div>

            {/* Cart Table */}
            <div className="table-bill">
              <table
                className="cart-table"
                cellPadding={10}
                border={1}
                rules="all"
              >
                <thead className="thead-border"></thead>
                <tbody align="center">
                  <tr>
                    <td colSpan={2}>
                      Discount <span>({totals.discountValue})</span>:
                    </td>
                    <td colSpan={2}>
                      -₹{totals.discount?.toFixed(2) || "0.00"}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Subtotal:</td>
                    <td colSpan={2}>
                      ₹{totals.subtotal?.toFixed(2) || "0.00"}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Delivery Fee:</td>
                    <td colSpan={2}>
                      ₹{totals.deliveryFee.toFixed(2) || "0.00"}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <strong>Total:</strong>
                    </td>
                    <td colSpan={2}>
                      <strong>₹{totals.total.toFixed(2) || "0.00"}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="place-cart">
              <Button className="pbtn">Place Order</Button>
              <Button className="cbtn" onClick={() => setCart([])}>
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Newsale;
