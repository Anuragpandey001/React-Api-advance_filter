import axios from "axios";
import React, { useEffect, useState } from "react";

const apiUrl = "https://fakestoreapi.com/products/";

function Fake() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((response) => setUser(response.data));
    console.log(user);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {user.map((item, index) => {
            return (
              <div className="col-md-4 mb-3" key={index}>
                <div className="bg-white cards  h-100  shadow p-3">
                  <div className="d-flex  gap-3">
                    <img
                      src={item.image}
                      className=" img-fluid userimg"
                      alt=""
                    />
                    <div className="itemsDescription">
                      <h2>{item.category}</h2>
                      <h4>{item.price}</h4>
                    </div>
                  </div>

                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-unstyled w-100">
              {[
                "For Startups",
                "For Investors",
                "Campaign Types",
                "Investment Instruments",
                "Agreement Processing",
                "Return & Tax Liabilities",
                "Triquity Platform",
                "Customer Support",
                "General Faqs",
              ].map((item, index) => {
                return (
                  <li className="w-100 pb-3" key={index}>
                    <a
                      href=""
                      className="btn bg-white shadow rounded-pill w-100"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default Fake;
