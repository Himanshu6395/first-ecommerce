// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import Filters from "../component/filter.jsx";
// import "./categories.css";
// import {allProducts} from "../../src/data/product.jsx"
// import Footer from "./footer.jsx";
// export default function CategoryPage() {
//   const { main, sub } = useParams();

// //   const allProducts = [
// //     { id: 1, name: "Premium Shirt", price: 899, category: "shirts", size: "M", image: "https://picsum.photos/250?1" },
// //     { id: 2, name: "Casual Shirt", price: 499, category: "shirts", size: "L", image: "https://picsum.photos/250?2" },
// //     { id: 3, name: "Jeans Classic", price: 1199, category: "jeans", size: "XL", image: "https://picsum.photos/250?3" },
// //     { id: 4, name: "Running Shoes", price: 1599, category: "shoes", size: "M", image: "https://picsum.photos/250?4" },
// //     { id: 5, name: "Laptop Pro", price: 59000, category: "laptops", size: "-", image: "https://picsum.photos/250?5" },
// //     { id: 6, name: "Earphones", price: 299, category: "earphones", size: "-", image: "https://picsum.photos/250?6" },
// //   ];

//   const filtered = allProducts.filter(
//     (item) => item.category === sub.toLowerCase()
//   );

//   const [sortType, setSortType] = useState("");
//   const [priceRange, setPriceRange] = useState(60000);
//   const [selectedSizes, setSelectedSizes] = useState([]);

//   // APPLY SIZE FILTER
//   const applySizeFilter =
//     selectedSizes.length > 0
//       ? filtered.filter((p) => selectedSizes.includes(p.size))
//       : filtered;

//   // SORTING
//   const sortedProducts = [...applySizeFilter].sort((a, b) => {
//     if (sortType === "low") return a.price - b.price;
//     if (sortType === "high") return b.price - a.price;
//     return 0;
//   });

//   // FINAL PRICE FILTER
//   const finalProducts = sortedProducts.filter((p) => p.price <= priceRange);

//   return (
//     <>
//     <div className="category-container">

//       <Filters
//         sortType={sortType}
//         setSortType={setSortType}
//         priceRange={priceRange}
//         setPriceRange={setPriceRange}
//         selectedSizes={selectedSizes}
//         setSelectedSizes={setSelectedSizes}
//       />

//       <div className="product-section">
//         <h1>{main.toUpperCase()} → {sub.toUpperCase()}</h1>
//         <p>Showing products under <b>{sub}</b></p>

//         <div className="product-grid">
//           {finalProducts.length > 0 ? (
//             finalProducts.map((product) => (
//               <div className="product-card" key={product.id}>
//                 <img src={product.image} />
//                 <h3>{product.name}</h3>
//                 <p className="price">₹{product.price}</p>
//                 <p className="size">Size: {product.size}</p>

//                 <button className="add-btn">
//                   Add to Cart
//                 </button>
//               </div>
//             ))
//           ) : (
//             <h3>No products found...</h3>
//           )}
//         </div>
//       </div>
     
//     </div>
//      <Footer/>
//      </>
//   );
// }
