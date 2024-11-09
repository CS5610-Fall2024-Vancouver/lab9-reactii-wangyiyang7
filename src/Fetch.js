import React, { useState, useEffect } from "react";

function Example() {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const resp = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await resp.json();
        setDogImage(data.message);
      } catch (error) {
        console.error("Error fetching the dog image:", error);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Random Dog Image</h1>
      {dogImage && <img src={dogImage} alt="A Random Dog" />}
    </div>
  );
}

export default Example;
