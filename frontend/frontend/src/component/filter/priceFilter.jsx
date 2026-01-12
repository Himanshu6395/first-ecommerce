export default function PriceFilter({ min, max, value, onChange }) {
  return (
    <div className="filter-section">
      <div className="filter-section-title">Price</div>

      <input
        className="price-range"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="price-value">
        Up to ₹{value}
      </div>
    </div>
  );
}
