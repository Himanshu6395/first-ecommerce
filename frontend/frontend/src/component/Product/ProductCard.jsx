import "./product.css"
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />

      <div className="product-title">{product.title}</div>
      <div className="product-category">
        {product.category?.name}
      </div>
      <div className="product-price">₹{product.price}</div>
    </div>
  );
}
