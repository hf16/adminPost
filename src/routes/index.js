import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from "../pages/ForgotPassword";
import Landing from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Reset from "../pages/Reset";
import Dahsboard from "../pages/admin/Dashboard";
import Maskapai from "../pages/admin/maskapai/Maskapai";
import Airport from "../pages/admin/airport/Airport";
import LoginAdmin from "../pages/LoginAdmin";


function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  if (token) {
    return children;
  }
  return <Navigate to="/loginAdmin" />;
}

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
          path="/auth/reset-password/:token"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />

        {/* control routes all page admin */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dahsboard />
          </PrivateRoute>
        } />

        <Route path="/maskapai" element={
          <PrivateRoute>
            <Maskapai />
          </PrivateRoute>
        }     
        />

        <Route path="/airport" element={
          <PrivateRoute>
            <Airport />
          </PrivateRoute>    
        } 
        />

        <Route
          path="/loginAdmin"
          element={
            <PublicRoute>
              <LoginAdmin />
            </PublicRoute>
          }
        />




      </Routes>
    </BrowserRouter>
  );
}
