import Filters from "../../component/filter/filter";
import ProductGrid from "../../component/Product/productGrid";
import "./shop.css";

export default function ShopLayout({
  filtersConfig,
  appliedFilters,
  setAppliedFilters,
  products,
}) {
  return (
    <div className="shop-page">
      {/* LEFT */}
      <div className="shop-filters">
        <Filters
          filtersConfig={filtersConfig}
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
        />
      </div>

      {/* RIGHT */}
      <div className="shop-products">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
