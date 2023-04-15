import React from "react";

import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("isAuth");
  return isAuthenticated === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/connexion" />
  );
};

export default ProtectedRoutes;
