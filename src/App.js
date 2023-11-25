import React from "react";
import Signup from "./components/user/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./components/user/Login";

import Protect from "./components/user/Protect";

import ErrorPage from "./components/user/ErrorPage";
import { useEffect } from "react";
import { useState } from "react";
import Portfolio from "./components/portfolio/Portfolio";
import Header from "./components/user/Header";
import Detail from "./components/portfolio/Detail";

export default function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("user") || "";
    setUser(userName);
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/portfolio/:user"
          element={<Protect Component={Portfolio} />}
        />
        <Route
          path="/portfolio/:user/:id"
          element={<Protect Component={Detail} />}
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
