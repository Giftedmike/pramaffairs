import React from "react";

const SuccessOrder = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card px-4 py-4 shadow-lg" style={{ width: "25rem" }}>
        {/* <img src="success.png" className="card-img-top" alt="Success Illustration" /> */}
        <i className="fa-solid fa-thumbs-up text-success fw-bolder fs-1 text-center"></i>
        <div className="card-body text-center">
          <h4 className="card-title fw-bolder">Order Placed Successfully</h4>
          <hr />
          <p className="card-text">
            Thank you for your order. <br /> <br />
            A confirmation email has been sent to your inbox with the next
            steps, including payment instructions and project onboarding.
            <br /> <br />
            <span className="text-danger">
              If you can't find the email in your inbox, please check your spam
              folder.
            </span>
          </p>
          <a href="/dashboard" className="btn btn-success mt-3">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrder;
