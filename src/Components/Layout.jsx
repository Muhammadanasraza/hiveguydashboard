import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const isLoggedIn = false //localStorage.getItem("login") === "true"; // Check login status
  const location = useLocation();
  if (!isLoggedIn){
  //  return <Navigate to="/login" replace />
  }
  // Redirect only if the user is on the root ("/") and is logged in
  if (isLoggedIn && location.pathname === "/") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
