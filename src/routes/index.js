import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import Landing from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Reset from "../pages/Reset";
import Dahsboard from "../pages/admin/Dashboard";
import Maskapai from "../pages/admin/maskapai/Maskapai";
import Ant from "../pages/admin/maskapai/Ant";

function PublicRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return children;
  }
  return <Navigate to="/" />;
}

export default function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
        </Route>

        {/* registrer */}
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/reset"
          element={
            <PublicRoute>
              <Reset />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/reset/:token"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />

        {/* control routes all page admin */}
        <Route path="/dashboard" element={<Dahsboard />} />
        <Route path="/maskapai" element={<Maskapai />} />
        <Route path="/ant" element={<Ant />} />
      </Routes>
    </BrowserRouter>
  );
}
