import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BrowsePage from "./pages/BrowsePage";

import LandingPage from "./pages/LandingPage";

import { Container } from "react-bootstrap";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse/:animal" element={<BrowsePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
