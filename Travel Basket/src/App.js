import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { BasketProvider } from "./context/BasketContext";
import BasketPage from "./pages/BasketPage";
import BasketConfirmation from "./pages/BasketConfirmation";

const App = () => {
  return (
    <BasketProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/basket" replace />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/basket/confirmation" element={<BasketConfirmation />} />
        </Routes>
      </Router>
    </BasketProvider>
  );
};

export default App;
