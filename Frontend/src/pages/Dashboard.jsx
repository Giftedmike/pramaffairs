import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Banner } from "../components/Banner";
import Counter from "../components/Counter";
import Product from "../components/Product";
import Category from "../components/Category";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  let endpoint = "http://localhost:5000/user/dashboard";
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
    <>
      <NavBar />
      <Banner />
      <Counter />
      <Product />
      <Category />
      <Pricing />
      <Contact />
      <Footer />
      
    </>
  );
};

export default Dashboard;
