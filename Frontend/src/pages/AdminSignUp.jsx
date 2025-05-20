import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminSignUp = () => {
    const [aMessage, setaMssage] = useState("");
    const navigate = useNavigate();
  let URL = "http://localhost:5000/admin/adminsignup";
  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
    //   console.log(values);
      axios
        .post(URL, values)
        .then((response) => {
          console.log(response);
          if(response.data.status){
            navigate("/adminsignin")
          }else{
            console.log(response.data.message)
            setaMssage(response.data.message)
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
          <div className="col-6  mx-auto">
            <h1 className="text-center pt-5">Admin SignUp</h1>
            <form action="" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                onChange={formik.handleChange}
                className="form-control my-2"
              />

              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                onChange={formik.handleChange}
                className="form-control my-2"
              />

              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                className="form-control my-2"
              />

              <input
                type="text"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                className="form-control my-2"
              />
              <button className="btn btn-success w-100 py-2 my-2" type="Submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignUp;
