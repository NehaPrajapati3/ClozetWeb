import React from "react";
import './productgallery.css'
import { Button } from "@mui/material";

const ProductGallery = ()=>{
    return(
        <>
        <div className="product-gallery-section">
           <div className="gallery-header">
            <div className="gallery-top">
                <div className="gallery-top-heading">
                    <div className="g-top-icon">
                        <img src="./images/product.png" alt=""/>
                    </div>
                    <div className="gallery-m-heading">
                        <h2>Product Gallery</h2>
                        <p>search product and use its info to create own product</p>
                    </div>
                </div>
            </div>
            <div className="gallery-search">
                <div className="g-search-box">
                    <div className="g-s-input">
                        <input className="p-s-name" type="text" placeholder="Ex search name"/>

                        <div className="p-s-btn">
                        <Button>Search</Button>
                    </div>
                    </div>
                   
                </div>
            </div>
            <div className="show-list-product">
                <div className="show-list">
                    <div className="show-list-head">
                    <div className="gallery-m-heading">
                        <h2>Product Gallery</h2>
                        <p>search product and use its info to create own product</p>
                    </div>
                    </div>
                    <div className="p-s-detail">
                    <div className="show-box1">
                        <div className="boxa">
                            <div className="boxa-img">
                                <img src="./food_img/veg-pulao.jpg" alt=""/>
                            </div>
                            
                        </div>
                        <div className="boxa-info">
                                <div className="info-p-l">
                                    <div className="info-1">
                                        <h2>Veg-Pulao</h2>
                                    </div>
                                    <div className="info-1">
                                        <h3>General Infomation</h3>
                                    </div>
                                    <div className="info-b">
                                    <div className="info-c">
                                      <span>Category :</span> <p>Veg Pulao</p>
                                    </div>
                                    <div className="info-c">
                                      <span> Sub Category :</span> <p>Veg Pulao</p>
                                    </div>
                                    <div className="info-c">
                                      <span>Item type :</span> <p>Veg </p>
                                    </div>
                                    </div>


                                </div>
                            </div>
                            <div className="boxb-info">
                                <div className="available">
                                    <h3>Available Variations</h3>
                                </div>
                            </div>
                            <div className="boxc-tag">
                                <div className="tags">
                                    <Button>Use This Product info</Button>
                                    <h3>Tags</h3>
                                </div>
                            </div>
                            
                    </div>
                    <div className="show-box2">
                            <div className="descrip">
                                <h3>Description</h3>
                                <p>Veg Pulao </p>
                               
                               
                            </div>

                          
                            
                    </div>
                   
                    </div>
                    <div className="p-s-detail">
                    <div className="show-box1">
                        <div className="boxa">
                            <div className="boxa-img">
                                <img src="./food_img/veg-pulao.jpg" alt=""/>
                            </div>
                            
                        </div>
                        <div className="boxa-info">
                                <div className="info-p-l">
                                    <div className="info-1">
                                        <h2>Veg-Pulao</h2>
                                    </div>
                                    <div className="info-1">
                                        <h3>General Infomation</h3>
                                    </div>
                                    <div className="info-b">
                                    <div className="info-c">
                                      <span>Category :</span> <p>Veg Pulao</p>
                                    </div>
                                    <div className="info-c">
                                      <span> Sub Category :</span> <p>Veg Pulao</p>
                                    </div>
                                    <div className="info-c">
                                      <span>Item type :</span> <p>Veg </p>
                                    </div>
                                    </div>


                                </div>
                            </div>
                            <div className="boxb-info">
                                <div className="available">
                                    <h3>Available Variations</h3>
                                </div>
                            </div>
                            <div className="boxc-tag">
                                <div className="tags">
                                    <Button>Use This Product info</Button>
                                    <h3>Tags</h3>
                                </div>
                            </div>
                            
                    </div>
                    <div className="show-box2">
                            <div className="descrip">
                                <h3>Description</h3>
                                <p>Veg Pulao </p>
                               
                               
                            </div>

                          
                            
                    </div>
                  
                    </div>
                    <div className="p-s-detail">
                    <div className="show-box1">
                        <div className="boxa">
                            <div className="boxa-img">
                                <img src="./food_img/veg-pulao.jpg" alt=""/>
                            </div>
                            
                        </div>
                        <div className="boxa-info">
                                <div className="info-p-l">
                                    <div className="info-1">
                                        <h2>Veg-Pulao</h2>
                                    </div>
                                    <div className="info-1">
                                        <h3>General Infomation</h3>
                                    </div>
                                    <div className="info-b">
                                    <div className="info-c">
                                      <span>Category :</span> <p>Veg Pulao</p>
                                    </div>
                                    <div className="info-c">
                                      <span> Sub Category :</span> <p>Veg Pulao</p>
                                    </div>
                                    <div className="info-c">
                                      <span>Item type :</span> <p>Veg </p>
                                    </div>
                                    </div>


                                </div>
                            </div>
                            <div className="boxb-info">
                                <div className="available">
                                    <h3>Available Variations</h3>
                                </div>
                            </div>
                            <div className="boxc-tag">
                                <div className="tags">
                                    <Button>Use This Product info</Button>
                                    <h3>Tags</h3>
                                </div>
                            </div>
                            
                    </div>
                    <div className="show-box2">
                            <div className="descrip">
                                <h3>Description</h3>
                                <p>Veg Pulao </p>
                               
                               
                            </div>

                          
                            
                    </div>
                  
                    </div>
                    
                </div>
                
                  
            </div>
           </div>
        </div>
        </>
    )
}

export default ProductGallery;