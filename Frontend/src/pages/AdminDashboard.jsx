import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    prodImage: "",
    prodTitle: "",
    prodInstruction: "",
    link: "",
  });

  const token = localStorage.getItem("token");
  const endpoint = "http://localhost:5000/user/admindashboard";

  // useEffect(() => {
  //   if (!token) {
  //     console.warn("No token found");
  //     return;
  //   }

  //   axios
  //     .get(endpoint, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       setMessage(response.data.message || "Welcome to your dashboard");
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching dashboard:", err);
  //     });
  // }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/product", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      alert(res.data.message || "Product added successfully");
      setFormData({ prodImage: "", prodTitle: "", prodInstruction: "", link: "" });
    } catch (err) {
      console.error("Add product error:", err);
      alert("Failed to add product");
    }
  };

  const handleDelete = async () => {
    if (!formData.prodTitle) {
      return alert("Enter the product title to delete");
    }

    try {
      const res = await axios.delete("http://localhost:5000/product", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: { prodTitle: formData.prodTitle }, // DELETE requests use `data` key for body
      });
      alert(res.data.message || "Product deleted successfully");
    } catch (err) {
      console.error("Delete product error:", err);
      alert("Failed to delete product");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="prodImage">Product Image URL:</label>
          <input
            type="text"
            id="prodImage"
            name="prodImage"
            value={formData.prodImage}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="prodTitle">Product Title:</label>
          <input
            type="text"
            id="prodTitle"
            name="prodTitle"
            value={formData.prodTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="prodInstruction">Product Instruction:</label>
          <textarea
            id="prodInstruction"
            name="prodInstruction"
            value={formData.prodInstruction}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="link">Product Link (optional):</label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <button type="submit">Add Product</button>
          <button type="button" onClick={handleDelete} style={{ marginLeft: "10px" }}>
            Delete Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminDashboard;
