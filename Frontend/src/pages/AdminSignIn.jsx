import axios from "axios";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminSignIn = () => {
  let URLL = "http://localhost:5000/admin/adminsignin";
  const navigate = useNavigate();
  const [uMessage, setuMessage] = useState("");
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post(URLL, values)
        .then((response) => {
          console.log(response);
          if (response.data.status) {
            localStorage.token = response.data.token
            console.log("Navigating to dashboard");
            navigate("/admindashboard");
          } else {
            console.log(response.data.message);
            setuMessage(response.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto">
            <h2 className="text-center pt-5">Admin SignIn</h2>
            <form action="" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="form-control py-2"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="form-control py-2"
              />
              <button type="submit" className="btn btn-success w-100 py2 my-2">
                Sign In
              </button>
              {uMessage && <p className="text-danger mt-2">{uMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignIn;
