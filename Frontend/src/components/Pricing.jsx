import React from "react";

const Pricing = () => {
  return (
    <div>
      <div className="container mt-3 text-center justify-content-center align-item-center">
        <h3 className="text-center py-3">Choose Your Pricing Plan</h3> <hr />
        <div className="row ">
          <div className="col-12 col-sm-4 mb-4 ps-2">
            <div className="card" style={{ width: "20rem" }}>
                <h5 className="card-title bg-primary text-light py-3">BASIC</h5>
              <img src="ccat.png" className="card-img-top" alt="#" />
              <div className="card-body">
                
                <p className="card-text bg-dark text-light fs-4 fw-bolder text-decoration-line-through"> #150,000</p>
                <p className="card-text">NOW <span className="fs-2 fw-bolder">#99,999</span> </p>
               
                <a href="#" className="btn btn-primary">
                  ORDER NOW
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mb-4">
            <div className="card" style={{ width: "20rem" }}>
                <h5 className="card-title bg-warning py-3">STANDARD</h5>
              <img
                src="cat2.png"
                className="card-img-top"
                alt="#"
              />
              <div className="card-body">
                <p className="card-text bg-dark text-light fs-4 fw-bolder text-decoration-line-through"> #200,000</p>
                <p className="card-text">NOW <span className="fs-2 fw-bolder">#149,999</span> </p>
                <a href="#" className="btn btn-primary">
                  ORDER NOW
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 mb-4">
            <div className="card" style={{ width: "20rem" }}>
                <h5 className="card-title bg-success text-light py-3">PRO</h5>
              <img
                src="cat3.png"
                className="card-img-top"
                alt="#"
              />
              <div className="card-body">
                <p className="card-text bg-dark text-light fs-4 fw-bolder text-decoration-line-through"> #500,000</p>
                <p className="card-text ">FROM <span className="fs-2 fw-bolder">#300,000</span> </p>
                <a href="#" className="btn btn-primary">
                  ORDER NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
