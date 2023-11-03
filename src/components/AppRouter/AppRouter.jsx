import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import { privateRoutes, publicRoutes, routes } from "../../router/routes";
import { AuthContext } from "../../context";
import Loader from "../UI/Loader/Loader";

export default function AppRouter() {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }
  
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate replace to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          element={<route.component />}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}
