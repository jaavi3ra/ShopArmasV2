
import React,{ useState } from "react";
import { obtenerTodosLosProductos } from "../data/productosAdmin";
import { ProductCard } from "../components/organism/CardProducto";
import { HomeTemplate } from "../components/template/HomeTemplate";
import "../styles/pages/homePage.css";

export function Home({ agregarAlCarrito, carrito }) {
  const [nombreProducto, setNombreProducto] = useState("");
  const productos = obtenerTodosLosProductos();
  // Estado del filtro
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Filtrar productos por categoría
  const productosFiltrados = productos.filter((product) => {
    return (
      activeFilter === "Todos" ||
      product.category === activeFilter
    );
  });
  
  function agregarProducto(producto) {
  agregarAlCarrito(producto);
  setNombreProducto(producto.name);

    setTimeout(() => {
      setNombreProducto("");
    }, 3000);
  }
  

  return (
    <div>
       <HomeTemplate
      stock={productosFiltrados.length}
      nombreProducto={nombreProducto}
      activeFilter={activeFilter}
      onFilterChange={setActiveFilter}
    >
      {productosFiltrados.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAgregarProducto={agregarProducto}
        />
      ))}
    </HomeTemplate>
    </div>
  );
}
