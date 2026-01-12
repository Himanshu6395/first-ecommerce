import { useState } from "react";

export default function CategoryFilter({
  categories,
  subCategories,
  appliedFilters,
  setAppliedFilters,
}) {
  const [openCategory, setOpenCategory] = useState(null);

  // CATEGORY CLICK
  const handleCategoryClick = (categoryId) => {
    setOpenCategory(
      openCategory === categoryId ? null : categoryId
    );

    setAppliedFilters({
      ...appliedFilters,
      category: categoryId,
      subCategory: "", // reset sub
    });
  };

  // SUB-CATEGORY CLICK (MAIN THING 🔥)
  const handleSubCategoryClick = (subCatId, categoryId) => {
    setAppliedFilters({
      ...appliedFilters,
      category: categoryId,   // ensure category
      subCategory: subCatId,  // actual filter
    });
  };

  return (
    <div className="filter-section">
      <div className="filter-section-title">Category</div>

      {categories.map((cat) => (
        <div key={cat._id}>
          {/* CATEGORY */}
          <div
            className="filter-option"
            onClick={() => handleCategoryClick(cat._id)}
            style={{
              fontWeight:
                appliedFilters.category === cat._id
                  ? "600"
                  : "400",
            }}
          >
            {cat.name}
          </div>

          {/* SUB-CATEGORIES */}
          {openCategory === cat._id && (
            <div style={{ paddingLeft: "14px" }}>
              {subCategories
                .filter(
                  (sub) =>
                    String(sub.category) === String(cat._id)
                )
                .map((sub) => (
                  <div
                    key={sub._id}
                    className="filter-option"
                    style={{
                      fontSize: "13px",
                      color:
                        appliedFilters.subCategory === sub._id
                          ? "#2874f0"
                          : "#555",
                    }}
                    onClick={() =>
                      handleSubCategoryClick(
                        sub._id,
                        cat._id
                      )
                    }
                  >
                    ▸ {sub.name}
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
