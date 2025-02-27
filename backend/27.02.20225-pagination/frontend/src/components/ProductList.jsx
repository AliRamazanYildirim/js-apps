import { useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import useProductStore from '../store/useProductStore';

const ProductList = () => {
  const { currentPage, products, setProducts, setTotalPages, search, setSearch, searchInput, setSearchInput } = useProductStore();
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/products`, {
          params: {
            page: currentPage,
            limit: 10,
            search: search,
          },
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, setProducts, setTotalPages, apiUrl, search]);

  useEffect(() => {
    setSearch(searchInput);
  }, [searchInput, setSearch]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
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