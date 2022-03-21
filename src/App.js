import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import useAuth from "./hooks/useAuth";
import PrivateRoute from "./routes/PrivateRoute";
import ShoppingCart from "./views/components/Checkout/ShoppingCart";
import Navigation from "./views/components/common/Navigation";
import HomePage from "./views/pages/HomePage";
import Login from "./views/pages/Login";
import Register from "./views/pages/Register";

function App() {
  return (
    <div>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="shoppingCart"
            element={
              <PrivateRoute>
                <ShoppingCart />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
