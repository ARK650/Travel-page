import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Explore from "./components/Explore";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Login from "./components/Login";
import HomeIcon from "./icons/home.jpg";
import ExploreIcon from "./icons/Explore";
import SearchIcon from "./icons/search.svg";
import ProfileIcon from "./icons/profile.svg";

function App() {
  return (
    <Router>
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 1, overflow: "auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <nav
          style={{
            position: "fixed",
            bottom: "20px", // A few cm above the bottom
            width: "90%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
            padding: "15px 0",
            borderRadius: "35px",
            backgroundColor: "#FFFBEB",
            zIndex: 1000,
          }}
        >
          <Link to="/" style={{ textAlign: "center", color: "#28343B" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={HomeIcon}
                alt="Home"
                style={{ width: "30px", height: "30px" }}
              />
              <span style={{ fontFamily: "Bebas Neue", fontSize: "14px" }}>
                HOME
              </span>
            </div>
          </Link>
          <Link to="/explore" style={{ textAlign: "center", color: "#C74B31" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={ExploreIcon}
                alt="Explore"
                style={{ width: "30px", height: "30px" }}
              />
              <span style={{ fontFamily: "Bebas Neue", fontSize: "14px" }}>
                EXPLORE
              </span>
            </div>
          </Link>
          <Link to="/search" style={{ textAlign: "center", color: "#28343B" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={SearchIcon}
                alt="Search"
                style={{ width: "30px", height: "30px" }}
              />
              <span style={{ fontFamily: "Bebas Neue", fontSize: "14px" }}>
                SEARCH
              </span>
            </div>
          </Link>
          <Link to="/profile" style={{ textAlign: "center", color: "#28343B" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={ProfileIcon}
                alt="My Account"
                style={{ width: "30px", height: "30px" }}
              />
              <span style={{ fontFamily: "Bebas Neue", fontSize: "14px" }}>
                MY ACCOUNT
              </span>
            </div>
          </Link>
        </nav>
      </div>
    </Router>
  );
}
export default App;
