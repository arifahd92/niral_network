import React, { useEffect, useState } from "react";
import classes from "./detail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Portfolio = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          ` https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        const data = response.data;
        console.log(data);
        //setName("hi I am " + data.name);
        runner(
          `Hi I am ${data.name}, from ${data.address.city} A frontend developer at ${data.company.name}`
        );
        setUser(data);
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    };
    getData();
  }, []);
  function runner(runner) {
    for (let i = 0; i < runner.length; i++) {
      setTimeout(() => {
        setName((previous) => previous + runner[i++]);
      }, i * 100);
    }
  }

  return (
    <div className={classes.detail}>
      <div className="container-fluid ">
        <div className="row">
          <div className={`text- text-center ${classes.name}`}>{name}</div>
        </div>
        <div className="row text-white">
          <div className={`col-md-4 col-sm-6 ${classes.address}   `}>
            <div className="card-body float-end">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text text-primary">
                frontend developer at: {user.company?.name}
              </p>
              <p className="card-text text-primary">Email: {user.email}</p>
              <p className="card-text text-primary">
                Address: {user.address?.city}, {user.address?.street}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
