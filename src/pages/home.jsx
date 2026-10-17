
import { useState } from "react";
import { productosCatalogo } from "../data/productos";
import { ProductCard } from "../components/organism/CardProducto";
import { HomeTemplate } from "../components/template/HomeTemplate";
import "../styles/pages/homePage.css";

export function Home({ agregarAlCarrito, carrito }) {
  const [nombreProducto, setNombreProducto] = useState("");

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
        stock={productosCatalogo.length}
        nombreProducto={nombreProducto}
      >
        {productosCatalogo.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAgregarProducto={() => agregarProducto(product)}
          />
        ))}
      </HomeTemplate>
    </div>
  );
}
