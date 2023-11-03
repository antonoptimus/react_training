import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import { privateRoutes, publicRoutes, routes } from "../../router/routes";

export default function AppRouter() {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          exact={route.exact}
          path={route.path}
          element={<route.component />}
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
        />
      ))}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}
