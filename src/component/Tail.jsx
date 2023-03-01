import axios from "axios";
import React, { useEffect, useState } from "react";

const apiUrl = "http://api.mytailmate.com:7012/fetch_product";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjczNTc2NTM4NjYiLCJpYXQiOjE2NzU5NDg1MTgsImV4cCI6MTY3NzY3NjUxOH0.EY6umGUK-XFEyEPLsTnZphOCcOEGqpvawT7dE1JhYgg",
  Accept: "application/json",
  "Content-Type": "application/json",
};

function Tail() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(apiUrl, { headers })
      .then((response) => setUsers(response.data.data));
    console.log(users);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          {users.map((item) => {
            return (
              <>
                <div className="col-md-4 mb-3">
                  <div
                    className="bg-white shadow h-100 p-3"
                    key={item.product.id}
                  >
                    <div className="">
                      <img src={item.product.images[0]} />
                    </div>
                    <h1>{item.product.name}</h1>
                    <p>{item.product.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tail;
