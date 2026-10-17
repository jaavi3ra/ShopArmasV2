
import { useEffect, useState } from "react";

import "./App.css";
import "./styles/global.css";

import { Header } from "./components/organism/header";
import { Footer } from "./components/organism/footer";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Stash } from "./pages/stash";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { Checkout } from "./pages/checkout";

function App() {
  const [carrito, setCarrito] = useState(() => {
  const carritoGuardado = localStorage.getItem("carrito");

  return carritoGuardado ? JSON.parse(carritoGuardado) : [];
});
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);
  function agregarAlCarrito(producto) {

  setCarrito((carritoActual) => {
    const productoExistente = carritoActual.find(
      (item) => item.id === producto.id
    );

    if (productoExistente) {
      return carritoActual.map((item) =>
        item.id === producto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...carritoActual, { ...producto, quantity: 1 }];
  });
}

  return (
    <>
      <div>
        <Header cantidadCarrito={carrito.reduce(
            (total, producto) => total + producto.quantity,
            0
          )}/>
        <Routes>
          <Route path="/" element={
              <Home agregarAlCarrito={agregarAlCarrito} carrito={carrito}/>
            }/>
          <Route path="/home" element={
              <Home agregarAlCarrito={agregarAlCarrito} carrito={carrito}/>
            }/>
          <Route path="/login" element={<Login />} />
          <Route path="/stash" element={<Stash />} />
          <Route path="/cart" element={
              <Cart carrito={carrito} setCarrito={setCarrito}/>
            }/>
          <Route
            path="/checkout" element={<Checkout carrito={carrito} />}
          />
          <Route path="/product" element={<Product />} />
        </Routes>
        <main className="main-content"></main>
        <Footer />
      </div>
    </>
  );
}

export default App;
