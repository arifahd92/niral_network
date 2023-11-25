import React from "react";
import Header from "../user/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./portfolio.css";
import { useNavigate } from "react-router-dom";
const Portfolio = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        alert(error.message);
      }
    };
    getData();
  }, []);
  const showDetail = (id) => {
    navigate(`${id}`);
  };
  return (
    <>
      <Header />
      <div className="container-fluid  ">
        <div className="row border border-danger bg-secondary-subtle">
          {users.map((user) => (
            <div
              key={user.id}
              className="col-md-6 col-lg-4 mt-4 d-flex justify-content-evenly">
              <div
                className="card text-center"
                style={{ width: "378px" }}
                onClick={() => showDetail(user.id)}>
                <img
                  style={{ width: "375px" }}
                  src={
                    "https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTestimonial-Gabriel-Rodriguez.1f8335f4.png&w=256&q=75"
                  }
                  alt={user.name}
                  className="card-img-top grow-on-hover text-center"
                />
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">
                    Address: {user.address.city}, {user.address.street}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
