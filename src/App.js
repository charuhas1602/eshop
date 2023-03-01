import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import SingleProduct from './pages/SingleProduct'
// import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { ThemeProvider } from "styled-components";

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduc/:id" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
