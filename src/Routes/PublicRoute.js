import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");

  return <div>{token ? <Navigate to='/dashboard'/>: <Outlet/> }</div>;
};

export default PublicRoute;
