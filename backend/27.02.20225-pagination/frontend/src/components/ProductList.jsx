import { useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import useProductStore from '../store/useProductStore';

const ProductList = () => {
  const { currentPage, products, setProducts, setTotalPages } = useProductStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products?page=${currentPage}&limit=10`);
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, setProducts, setTotalPages]);

  return (
    <div>
      <ul>
        {products && products.length > 0 ? (
          products.map((product) => (
            <li key={product._id}>
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <li>No products found</li>
        )}
      </ul>
      <Pagination />
    </div>
  );
};

export default ProductList;