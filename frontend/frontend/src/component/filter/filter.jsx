import SearchFilter from "./SearchFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import "./filter.css";

export default function Filters({
  filtersConfig,
  appliedFilters,
  setAppliedFilters,
}) {
  if (!filtersConfig) return <p>Loading filters...</p>;

  return (
    <div className="filter-sidebar">
      {/* SEARCH */}
      <SearchFilter
        value={appliedFilters.search}
        onChange={(val) =>
          setAppliedFilters({ ...appliedFilters, search: val })
        }
      />

      {/* CATEGORY + SUBCATEGORY 🔥 */}
      <CategoryFilter
  categories={filtersConfig.categories}
  subCategories={filtersConfig.subCategories}
  appliedFilters={appliedFilters}
  setAppliedFilters={setAppliedFilters}
/>

      {/* PRICE */}
      <PriceFilter
        min={filtersConfig.price.min}
        max={filtersConfig.price.max}
        value={appliedFilters.price || filtersConfig.price.max}
        onChange={(val) =>
          setAppliedFilters({ ...appliedFilters, price: val })
        }
      />
    </div>
  );
}
