import { useFormik } from "formik";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
  const navigate = useNavigate();
  const [uMessage, setuMessage] = useState("");
  let URL = "http://localhost:5000/user/signup";

  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(URL, values)
        .then((response) => {
          console.log(response);
          if (response.data.status) {
            navigate("/usersignin");
          } else {
            console.log(response.data.message);
            setuMessage(response.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <h3>{uMessage}</h3>
          <div className="col-6 mx-auto">
            <h1 className="text-center pt-5">User SignUp</h1>
            <form action="" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                onChange={formik.handleChange}
                className="form-control py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                onChange={formik.handleChange}
                className="form-control py-2"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                className="form-control py-2"
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                className="form-control py-2"
              />
              <button type="Submit" className="btn btn-success w-100 py-2 my-2">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignUp;
