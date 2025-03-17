import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Banner from "./components/Banner";
import List from "./components/List";
import MoviePage from "./components/Moviepage";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
};

const MainLayout = () => {
  const location = useLocation();

  // Show Header only on the home page
  const showHeaderRoutes = ["/"];

  return (
    <>
      {/* Show Header only if the current route is in showHeaderRoutes */}
      {showHeaderRoutes.includes(location.pathname) && <Header />}
      
      <Routes>
        <Route path="/" element={<HomeBanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Removed Header from Banner Page */}
        <Route path="/dashboard" element={<><Banner /><List /></>} />

        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
};

export default App;