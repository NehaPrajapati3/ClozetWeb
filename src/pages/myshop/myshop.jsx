import React from "react";
import './myshop.css'

const MyShop = ()=>{
    return(
        <>
        <div className="myshop-section">
            <div className="myshop-header">
                <div className="myshop-detail">
                <div className="my-shop-top">
                    <div className="my-shop-heading">
                    <div className="d-1">
                    <h3>Default</h3>
                  </div>
                  <div className="e-1">
                    <h3>English</h3>
                  </div>
                    </div>
                </div>
                <div className="myshop-form">
                    <div className="form-part1">
                    <div className="n-heading">
                        <h3>Name (Default)</h3>
                    </div>
                    <div className="n-input">
                        <input type="text" placeholder="Enter Name" />
                    </div>
                    </div>
                    <div className="form-part2">
                    <div className="n-heading">
                        <h3>Address (Default)</h3>
                    </div>
                    <div className="n-input">
                        <textarea  id="" placeholder="Enter Shop Area"></textarea>
                    </div>
                    </div>
                    <div className="form-part3">
                    <div className="n-heading">
                        <h3>Contact number*</h3>
                    </div>
                    <div className="n-input">
                        <input type="number" placeholder="Enter Mobile Number" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="upload-box">
                    <div className="upload-logo-left">
                        <div className="up-logo-top">
                            <div className="up-logo-heading">
                                <h3>Upload Logo</h3>
                            </div>
                        </div>
                        <div className="up-img">
                            <div className="img-real">
                                <img src="./images/shops.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="upload-logo-right">
                    <div className="up-logo-top">
                            <div className="up-logo-heading">
                                <h3>Upload Cover Photo(Ratio 2:1)</h3>
                            </div>
                        </div>
                        <div className="up-img">
                            <div className="img-real">
                                <img src="./images/shops.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default MyShop;