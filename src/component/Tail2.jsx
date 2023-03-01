import React, { useState, useEffect } from "react";

import axios from "axios";

const apiUrl = "http://api.mytailmate.com:7012/fetch_product";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjczNTc2NTM4NjYiLCJpYXQiOjE2NzU5NDg1MTgsImV4cCI6MTY3NzY3NjUxOH0.EY6umGUK-XFEyEPLsTnZphOCcOEGqpvawT7dE1JhYgg",
  Accept: "application/json",
  "Content-Type": "application/json",
};

function Tail2() {
  const [products, setProducts] = useState([]);

  axios
    .get(apiUrl, { headers })
    .then((response) => {
      const data = response.data;
      setProducts(data.data);

      // TODO: use the data retrieved from the API
    }, [])
    .catch((error) => {
      console.error(error);
    }, []);
  return <></>;
}

export default Tail2;
