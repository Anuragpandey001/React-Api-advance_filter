import React, { useEffect, useState } from "react";
import axios from "axios";

function AdvanceFilter() {
  const [product, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const url = filter
      ? `https://fakestoreapi.com/products/category/${filter}`
      : "https://fakestoreapi.com/products/";
    axios.get(url).then((response) => setProducts(response.data));
  }, [filter]);

  const handleFilter = (gender) => {
    setFilter(gender);
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="text-center gap-5 d-flex justify-content-center my-5">
              <button
                className="btn bg-dark text-white shadow-none"
                onClick={() => handleFilter("women's clothing")}
              >
                Women
              </button>
              <button
                className="btn bg-primary text-white shadow-none"
                onClick={() => handleFilter("men's clothing")}
              >
                Men
              </button>
              <button
                className="btn bg-dark text-white shadow-none"
                onClick={() => handleFilter("electronics")}
              >
                Electronic
              </button>
              <button
                className="btn bg-warning text-white shadow-none"
                onClick={() => handleFilter("jewelery")}
              >
                Jwellery
              </button>
              <button
                className="btn bg-success text-white shadow-none"
                onClick={() => handleFilter()}
              >
                All
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {product.map((item, index) => {
            const { image, category, description, id, price, title } = item;
            return (
              <div className="col-md-4 mb-2" key={id}>
                <div className="bg-white cards h-100 shadow p-3">
                  <div className="d-flex gap-4 mb-4">
                    <div className="">
                      <img src={image} className="img-fluid userimg" alt="" />
                    </div>
                    <div className="description w-100 text-start">
                      <h4 className="">{category}</h4>
                      <h5 className="text-secondary">$ {price}</h5>
                      <h6 className="fw-bold ">{title}</h6>
                    </div>
                  </div>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdvanceFilter;
