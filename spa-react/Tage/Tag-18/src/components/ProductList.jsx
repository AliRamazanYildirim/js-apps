import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const ProductList = () => {
  const { products } = useProductStore();
  const { addToCart } = useCartStore();

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
