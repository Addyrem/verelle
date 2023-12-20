import React, { useState, useEffect } from 'react';

const YourECommerceComponent = () => {
  // State to store the total item count
  const [totalItemCount, setTotalItemCount] = useState(0);

  // Simulated product data (replace this with your actual data)
  const products = [
    { id: 1, category: 'dress', discounted: true, isVisible: true },
    { id: 2, category: 'top', discounted: false, isVisible: true },
    // Add more product data as needed
  ];

  // Function to update the item count
  const updateItemCount = () => {
    const visibleProducts = products.filter((product) => product.isVisible);
    setTotalItemCount(visibleProducts.length);
  };

  // Call the updateItemCount function whenever the component mounts or updates
  useEffect(() => {
    updateItemCount();
  }, [products]); // Add other dependencies if needed

  // Function to toggle product visibility (replace with your actual logic)
  const toggleProductVisibility = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, isVisible: !product.isVisible } : product
    );
    // Simulate updating state with the new product visibility
    // Replace this with your actual state management logic
    setProducts(updatedProducts);
  };

  return (
    <div>
      <p id="item-count">{totalItemCount} {totalItemCount === 1 ? 'Item' : 'Items'}</p>

      {/* Simulated product list, replace with your actual product rendering logic */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.isVisible && (
              <div>
                <span>{product.category}</span>
                <span>{product.discounted ? 'Discounted' : 'Regular Price'}</span>
                <button onClick={() => toggleProductVisibility(product.id)}>
                  Toggle Visibility
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourECommerceComponent;
