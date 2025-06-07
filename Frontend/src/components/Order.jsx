import React from "react";
import NavBar from "../components/NavBar";

const Order = () => {
  return (
    <div >
      <NavBar />
      <div className=" mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light form-container">
            <h1 className="mb-4 text-center pt-4 text-success">WEBSITE DESIGN</h1>
            <h2 className="mb-4 text-center">Customer Order Form</h2>
            <form className="fs-5 fw-bold ms-5 me-5">
              {/* <!-- Dropdown --> */}
              <div className="mb-3 ">
                <label htmlFor="entityType" className="form-label">
                  Select Package
                </label>
                <select className="form-select" id="entityType" required>
                  <option value="" disabled selected>
                    Select one
                  </option>
                  <option value="business">Basic Package - #99,999</option>
                  <option value="school">Standard Package - #149,999</option>
                  <option value="hospital">Pro Package - #300,000</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="entityType" className="form-label">
                  Select Type
                </label>
                <select className="form-select" id="entityType" required>
                  <option value="" disabled selected>
                    Select one
                  </option>
                  <option value="business">Business</option>
                  <option value="school">School</option>
                  <option value="hospital">Hospital</option>
                  <option value="portfolio">Portfolio</option>
                </select>
              </div>

              {/* <!-- Name Input --> */}
              <div className="mb-3">
                <label htmlFor="entityName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="entityName"
                  placeholder="Enter business or school or hospital or work name"
                  required
                />
              </div>

              {/* <!-- Address Input --> */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Office Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter office address"
                  required
                />
              </div>

              {/* <!-- Type Input --> */}
              <div className="mb-3">
                <label htmlFor="typeInput" className="form-label">
                  Nature Of
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="typeInput"
                  placeholder="Business or school or hospital or work"
                  required
                />
              </div>

              {/* <!-- Phone Number --> */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              {/* <!-- Email --> */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email address"
                  required
                />
              </div>

              {/* <!-- Submit Button --> */}
              <button type="submit" className="btn btn-primary mb-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
