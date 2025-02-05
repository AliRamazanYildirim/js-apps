import './App.css'
import Products from './components/Products'
import { useState } from 'react'
function App() {

const [products, setProducts] = useState([
  { id: 1, name: 'C#', price: 10.99 },
  { id: 2, name: 'Node.js', price: 9.99 },
  { id: 3, name: 'JS', price: 12.99 },
]);
const removeHandler = (goalId) => {
  const removeProduct = (products.filter((p) => p.id !== goalId));
  setProducts(removeProduct);
  console.log("Product removed", goalId); 
}
  return (
    <>
    <div>Hooks useState</div>
    {/* BEISPIEL-1 */}
    {/* <Counter/> */}
    {/* BEISPIEL-2 */}
    {/* <Users/> */}
    {/* BEISPIEL-3 */}
    {/* <Search/> */}
    <h1>Our Courses</h1>
      {products.map((product) => (
          <Products
            ourProducts={product.name}
            ourPrice={product.price}
            key={product.id}
            onDelete={() => removeHandler(product.id)}
          />
        ))}
    </>
  );
}

export default App
