import React, { useState, useEffect } from "react";

const DeleteProducts = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      console.log(id);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            {product.title}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DeleteProducts;
