import React from "react";
import HomePage from "./components/home-page/home-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/dashboard/dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard/*" element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
