import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  let endpoint = "http://localhost:5000/user/admindashboard";
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      console.warn("No token found");
      return;
    }
    axios
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((Response) => {
        console.log(Response);
        setMessage(response.data.message || "Welcome to your dashboard");
      })
      .catch((err) => {
        console.error("Error fetching dashboard:", err);
      });
  }, [token]);
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>{message}</p>
    </div>
  );
};

export default AdminDashboard;
