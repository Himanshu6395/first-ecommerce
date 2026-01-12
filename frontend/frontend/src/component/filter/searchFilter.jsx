export default function SearchFilter({ value, onChange }) {
  return (
    <div className="filter-section">
      <div className="filter-section-title">Search</div>
      <input
        className="filter-search-input"
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
