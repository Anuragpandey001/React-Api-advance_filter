import React, { useEffect, useState } from "react";
import axios from "axios";

function Practice() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setUsers(response.data));
    // console.log(users);
  });
  const postData = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
      })
      .then((res) => console.log("post data", res));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form action="">
              <input
                type="text"
                value={title}
                className="form-control"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                type="text"
                name=""
                value={body}
                id=""
                className="form-control"
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
              <button
                className="btn bg-primary mt-2 text-white"
                type="submit"
                onClick={postData}
              >
                submit
              </button>
            </form>
          </div>
          {users.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="bg-white shadow">
                    <h3>{item.id}</h3>
                    <p>{item.body}</p>
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

export default Practice;
