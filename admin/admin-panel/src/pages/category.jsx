import React, { useState } from "react";
import "./category.css";
import { addCategory } from "../Apis/category";

const Category = () => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await addCategory({ name });
      alert("Category added successfully");
      setName("");
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="category-container">
      <h1>Add Category</h1>

      <form className="category-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Category;
