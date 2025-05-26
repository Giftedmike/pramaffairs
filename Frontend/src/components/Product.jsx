import React from "react";

const Product = () => {
  return (
    <>
      <div className="container mt-3 text-center justify-content-center align-item-center">
        <h3 className="text-center py-3">Popular Products</h3> <hr />
        <div className="row ">
          <div className="col-12 col-sm-3 mb-3 ps-2">
            <div className="card" style={{ width: "18rem" }}>
              <img src="p.png" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">Hospital</h5>
                <p className="card-text">STARTING AT</p>
                <p className="card-text">#15,100 per 100</p>
                <a href="#" className="btn btn-danger">
                  Browse-Two-Sided-Bu..
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1572522725_flyer-1sided.png"
                className="card-img-top"
                alt="#"
              />
              <div className="card-body">
                <h5 className="card-title">School</h5>
                <p className="card-text">STARTING AT</p>
                <p className="card-text">#15,100 per 100</p>
                <a href="#" className="btn btn-danger">
                  Browse-Two-Sided-Bu..
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://printivo.s3-us-west-2.amazonaws.com/files/category_thumbnails/1656003107_social-media--15.png"
                className="card-img-top"
                alt="#"
              />
              <div className="card-body">
                <h5 className="card-title">Hand Work</h5>
                <p className="card-text">STARTING AT</p>
                <p className="card-text">#15,100 per 100</p>
                <a href="#" className="btn btn-danger">
                  Browse-Two-Sided-Bu..
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-3 mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="pppp.png" className="card-img-top" alt="#" />
              <div className="card-body">
                <h5 className="card-title">Business</h5>
                <p className="card-text">STARTING AT</p>
                <p className="card-text">#15,100 per 100</p>
                <a href="#" className="btn btn-danger">
                  Browse-Two-Sided-Bu..
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Product;
