import { useEffect, useState } from "react";
import ShopLayout from "./ShopLayout";
import Footer from "../footer"
import {
  getShopFilters,
  getShopProducts,
} from "../../apis/shopApi";
import './shop.css'
export default function ShopContainer() {
  const [filtersConfig, setFiltersConfig] = useState(null);
  const [products, setProducts] = useState([]);
 const [appliedFilters, setAppliedFilters] = useState({
  search: "",
  category: "",
  subCategory: "", 
  price: "",
});


  //  filters (LEFT sidebar data)
  const loadFilters = async () => {
    const data = await getShopFilters();
    setFiltersConfig(data);
  };

  //  products (RIGHT side)
  const loadProducts = async () => {
    const data = await getShopProducts(appliedFilters);
    setProducts(data);
  };

  useEffect(() => {
    loadFilters();
  }, []);

  //  FILTER CHANGE HOTE HI PRODUCTS LOAD
  useEffect(() => {
    loadProducts();
  }, [appliedFilters]);

  return (
    <>
    <ShopLayout
      filtersConfig={filtersConfig}
      appliedFilters={appliedFilters}
      setAppliedFilters={setAppliedFilters}
      products={products}
    />
   <Footer/>
   </>
  );
}
