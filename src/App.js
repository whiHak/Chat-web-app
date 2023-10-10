import React, { useContext } from "react";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import "./style.scss";
import { Home } from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

const App = () => {
  const currentUser = useContext(AuthContext);
  console.log(!currentUser);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/Login" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
