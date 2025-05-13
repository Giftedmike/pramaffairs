import axios from "axios";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserSignIn = () => {
    let URL = "http://localhost:5000/user/signin";
    const navigate = useNavigate();
    const [uMessage, setuMessage] = useState("")
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
        axios
        .post(URL, values)
        .then(()=>{
            console.log(response);
          if (response.data.status) {
            navigate("/dashboard");
          } else {
            console.log(response.data.message);
            setuMessage(response.data.message);
          }
        })
        .catch((err)=>{
            console.log(err)
        })
    },
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 mx-auto">
            <h2 className="text-center pt-5">User SignIn</h2>
            <form action="" onSubmit={formik.handleSubmit}>
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
              <button type="submit" className="btn btn-success w-100 py2 my-2">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignIn;
