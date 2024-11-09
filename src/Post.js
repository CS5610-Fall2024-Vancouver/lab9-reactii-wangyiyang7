import { useState, useEffect } from "react";

const Post = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (newProduct) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const addedProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title: event.target.title.value,
      price: event.target.price.value,
      description: event.target.description.value,
    };
    addProduct(newProduct);
  };

  return (
    <div>
      <h1>Product List</h1>

      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" name="description" required />
        </div>
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            {product.title} <br />${product.price}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Post;
