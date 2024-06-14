import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  return (
    <div>{token ? <Outlet /> : <Navigate to="/login" replace={true}/>}</div>
  )
}

export default PrivateRoute