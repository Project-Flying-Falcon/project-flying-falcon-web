import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">
        
        {/* Header */}
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/" className="brand-name">Flying Falcon</Link>
          </div>

          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
          </div>
        </header>

        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button
            className="sidebar-close-button"
            onClick={closeMenu}
          >
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>

        {/* Main Content (Routes go here) */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          &copy; 2026 Flying Falcon
        </footer>

      </div>
    </Router>
  );
}

export default App;