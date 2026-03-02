import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/orders";
import OrderDetail from "./Orders/OrderDetail";
import PaymentScreen from "./Payment/Payment";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  brand: string;
  rating: number;
  numberOfReviews: number;
};

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product: Product) => {
    const index = cartItems.findIndex((x) => x.id === product.id);
    if (index >= 0) {
      const copy = [...cartItems];
      copy.splice(index, 1);
      setCartItems(copy);
    }
  };

  return (
    <Router>
      <div className="grid-container">
        {/* Header */}
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/" className="brand-name">
              Jet Piranha
            </Link>
          </div>

          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payment</Link>
          </div>
        </header>

        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
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

        {/* Main Content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products/>} />
            <Route path="orders" element={<Orders />}></Route>
            <Route path="/order/:id" element={<OrderDetail />}></Route>
            <Route path="/payment" element={<PaymentScreen />} />
          </Routes>
        </main>

        <footer className="footer">&copy; 2026 Jet Piranha</footer>
      </div>
    </Router>
  );
}

export default App;