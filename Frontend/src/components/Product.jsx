import React from "react";
import Samples from "./Samples";

const Product = () => {
  return (
    <>
      <div className="container mt-3 text-center justify-content-center align-item-center" id="product">
        <h3 className="text-center py-3">Choose From Our Sample designs</h3> <hr />
        <div className="row ">
          <div className="col-12 col-sm-3 mb-3 ps-2">
            <div className="card" style={{ width: "18rem" }}>
              <img src="hosp.jpg" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title pb-3">Hospital</h5>
                <p className="card-text">CLICK BELOW <br /> To choose designs</p>
                
                <a href="/samples" target="_blank" className="btn btn-success">
                  Sample Websites
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="school.jpg"
                className="card-img-top"
                alt="#"
              />
              <div className="card-body">
                <h5 className="card-title pb-3">School</h5>
                <p className="card-text">CLICK BELOW <br /> To choose designs</p>
                <a href="/samples" target="_blank" className="btn btn-success">
                  Sample Websites
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="hand.jpg"
                className="card-img-top"
                alt="#"
              />
              <div className="card-body">
                <h5 className="card-title pb-3">Hand Work</h5>
                <p className="card-text">CLICK BELOW <br /> To choose designs</p>
                <a href="/samples" target="_blank" className="btn btn-success">
                  Sample Websites
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="biz.jpg" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title pb-3">Business</h5>
                <p className="card-text">CLICK BELOW <br /> To choose designs</p>
                <a href="/samples" target="_blank" className="btn btn-success">
                  Sample Webites
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <Samples />
    </>
  );
};

export default Product;
