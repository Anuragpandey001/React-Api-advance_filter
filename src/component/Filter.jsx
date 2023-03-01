import React, { useState, useEffect } from "react";

function Filter() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const url = filter
      ? `https://fakestoreapi.com/products/category/${filter}`
      : "https://fakestoreapi.com/products/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
    console.log(filter);
    console.log(url);
    console.log(products);
  }, [filter]);

  const handleFilter = (gender) => {
    setFilter(gender);
  };

  return (
    <>
      <div>
        <button onClick={() => handleFilter("women's clothing")}>Women</button>
        <button onClick={() => handleFilter("men's clothing")}>Men</button>
        <button onClick={() => handleFilter("electronics")}>Electronic</button>
        <button onClick={() => handleFilter("jewelery")}>Jwellery</button>
        <button onClick={() => handleFilter()}>All</button>

        <div>
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt="" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Filter;
