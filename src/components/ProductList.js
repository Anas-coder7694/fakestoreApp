import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
