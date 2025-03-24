import React, {useState} from "react";
import "./allorder.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdFileDownload } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { Button, Switch } from "@mui/material";
import Footer from "../footer/footer";
import { useGetOrders } from "../files";
import { useSelector } from "react-redux";
import { selectOrders } from "../files";
import { useDispatch } from "react-redux";
import { setOrders } from "../../redux/orderSlice";
import toast from 'react-hot-toast'


const AllOrder = () => {
  useGetOrders();
  const orders = useSelector(selectOrders);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const searchOrder = orders?.find((order) =>
      order.customerInformation.toLowerCase().includes(search.toLowerCase())
    );
    if (searchOrder) {
      dispatch(setOrders([searchOrder]));
    } else {
      toast.error("Order not found");
    }
    setSearch("");
  };

  return (
    <>
      <div className="order-section">
        <div className="order-header">
          <div className="order-top">
            <div className="order-heading">
              <div className="allorder-img">
                <img src="./images/order-delivery.png" alt="" />
              </div>
              <div className="top-heading">
                <h2>All Orders</h2>
                <span className="o-list">
                  <h3>{orders.length}</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="order-table">
            <div className="order-table-section">
              <div className="tb-or-top">
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
                    <Button className="e-btn">
                      <span>
                        <MdFileDownload />
                      </span>
                      Export
                      <span>
                        <IoIosArrowDown />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="main-or-table">
                <table width="100%">
                  <thead>
                    <tr>
                      <th>SI</th>
                      <th>Order Id</th>
                      <th>Order Date</th>
                      <th>Customer Information</th>
                      <th>Total Amount</th>
                      <th>Order Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length > 0 ? (
                      orders.map((order, index) => (
                        <tr key={order._id}>
                          <td>{index + 1}</td>
                          <td>{order._id}</td>
                          <td>{order.createdAt}</td>
                          <td>{order.customerInformation}</td>
                          <td>{order.totalAmount}</td>
                          <td>
                            <Switch checked={order.orderStatus} />
                          </td>
                          <td className="ac-box">
                            <Button className="hipen">
                              <LuEye />
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
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AllOrder;
