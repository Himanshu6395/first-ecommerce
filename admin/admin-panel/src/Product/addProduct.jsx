import React, { useEffect, useState } from "react";
import "./addProduct.css";
import {
  getCategories,
  getSubCategoriesByCategory,
  addProduct,
} from "../Apis/category.js";
import { getPresignedUrl,uplaodImageToS3 } from "../Apis/imageApi.js";
import {useSelector} from "react-redux"
export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    salePrice: "",
    description: "",
    sku: "",
    stock: "",
    category: "",
    subCategory: "",
    isActive: true,
  });

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [images, setImages] = useState([]);
  const user =useSelector((state)=>state.Adminauth.user.id)
  console.log("njnjndffdm",user)
  /* ---------------- LOAD CATEGORIES ---------------- */
useEffect(() => {
    const loadCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data);
      } catch (err) {
        console.error("Category load failed", err);
      }
    };

    loadCategories();
  }, []);

  /* -------- LOAD SUBCATEGORIES ON CATEGORY CHANGE -------- */
  useEffect(() => {
    if (!form.category) {
      setSubCategories([]);
      setForm((prev) => ({ ...prev, subCategory: "" }));
      return;
    }

    getSubCategoriesByCategory(form.category)
      .then((res) => setSubCategories(res.data))
      .catch((err) => console.error(err));
  }, [form.category]);


  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setForm({
    ...form,
    [name]: type === "checkbox" ? checked : value,
  });
};



  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

 
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.category || !form.subCategory) {
    alert("Please select Category and SubCategory");
    return;
  }

  try {
    const imageKeys = [];

    // 1️⃣ IMAGE UPLOAD LOOP
    for (let img of images) {
      // backend se permission lo
      const  {   uploadUrl, key  }= await getPresignedUrl(img,user);
      console.log("helooo",uploadUrl, key)
       

      // direct S3 upload
      console.log("Uploading image:", img.name);
     await uplaodImageToS3(uploadUrl, img);
     
console.log("Uploaded image:");
    imageKeys.push(key);

    }
   
    
    await addProduct({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
       images: imageKeys,
    });

    alert("Product added successfully");

    // reset
    setForm({
      name: "",
      price: "",
      salePrice: "",
      description: "",
      sku: "",
      stock: "",
      category: "",
      subCategory: "",
      isActive: true,
    });
    setImages([]);
    setSubCategories([]);

  } catch (err) {
    console.error(err);
    alert("Product add failed");
  }
};


  /* ---------------- UI ---------------- */
  return (
    <div className="add-container">
      <h2 className="add-title">Add Product</h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="salePrice" type="number" placeholder="Sale Price" value={form.salePrice} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} />
        <input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} />

        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>

        <select
          name="subCategory"
          value={form.subCategory}
          onChange={handleChange}
          required
          disabled={!form.category}
        >
          <option value="">Select SubCategory</option>
          {subCategories.map((s) => (
            <option key={s._id} value={s._id}>{s.name}</option>
          ))}
        </select>

        <label className="checkbox">
          <input type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} />
          Active
        </label>

        <input type="file" multiple onChange={handleImages} />

        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>
    </div>
  );
}
