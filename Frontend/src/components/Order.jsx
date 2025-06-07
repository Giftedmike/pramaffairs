import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const navigate = useNavigate();
  const [packageType, setPackageType] = useState("");
  const [entityType, setEntityType] = useState("");
  const [entityName, setEntityName] = useState("");
  const [address, setAddress] = useState("");
  const [organizationNature, setOrganizationNature] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const URL = "http://localhost:5000/order";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      packageType,
      entityType,
      entityName,
      address,
      organizationNature,
      phone,
      email,
    };

    axios
      .post(URL, formData)
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          navigate("/successOrder"); // navigate to modal or success screen
        } else {
          setMessage(response.data.message || "Something went wrong.");
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage("Submission failed. Please try again later.");
      });

    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <NavBar />
      <div className="mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light form-container">
            <h1 className="mb-4 text-center pt-4 text-success">WEBSITE DESIGN</h1> <hr />
            <h2 className="mb-4 text-center">Customer Order Form</h2>

            {message && <div className="alert alert-warning">{message}</div>}

            <form className="fs-5 fw-bold ms-5 me-5" onSubmit={handleSubmit}>
              {/* Package */}
              <div className="mb-3">
                <label htmlFor="packageType" className="form-label">Select Package</label>
                <select
                  className="form-select"
                  id="packageType"
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select one</option>
                  <option value="basic #99,999">Basic Package - #99,999</option>
                  <option value="standard #149,999">Standard Package - #149,999</option>
                  <option value="pro #300,000">Pro Package - #300,000</option>
                </select>
              </div>

              {/* Entity Type */}
              <div className="mb-3">
                <label htmlFor="entityType" className="form-label">Select Type</label>
                <select
                  className="form-select"
                  id="entityType"
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value)}
                  required
                >
                  <option value="" disabled>Select one</option>
                  <option value="business">Business</option>
                  <option value="school">School</option>
                  <option value="hospital">Hospital</option>
                  <option value="portfolio">Portfolio</option>
                </select>
              </div>

              {/* Name */}
              <div className="mb-3">
                <label htmlFor="entityName" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="entityName"
                  placeholder="Enter Business or Hospital or School name"
                  value={entityName}
                  onChange={(e) => setEntityName(e.target.value)}
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Office Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter office address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              {/* Organization Nature */}
              <div className="mb-3">
                <label htmlFor="typeInput" className="form-label">Organization or Work Nature</label>
                <input
                  type="text"
                  className="form-control"
                  id="typeInput"
                  placeholder="e.g. Private/Specialist Hospital or Primary/Secondary School or Restaurant/Boutique/Spare Parts/Mecahnic/Painter etc"
                  value={organizationNature}
                  onChange={(e) => setOrganizationNature(e.target.value)}
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success mb-5">
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
