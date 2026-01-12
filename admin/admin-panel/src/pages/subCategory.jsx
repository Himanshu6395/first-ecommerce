import React, { useEffect, useState } from "react";
import "./category.css";
import { addSubCategory } from "../Apis/category.js";
import { getCategories } from "../Apis/category.js";

const SubCategory = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState(true);

  // load categories for dropdown
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      alert("Please select a category");
      return;
    }

    try {
      await addSubCategory({
        name,
        category,
        isActive
      });

      alert("SubCategory added successfully");
      setName("");
      setCategory("");
      setIsActive(true);
    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };

  return (
    <div className="parent" style={{ padding: "20px" }}>
      <h2 className="subParent">Add SubCategory</h2>

      <form className="subCategory_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter SubCategory"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <label style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
          />
          Active
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default SubCategory;
