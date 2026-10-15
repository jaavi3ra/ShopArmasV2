import { useState } from "react";
import { productosCatalogo } from "../data/productos";
import { ProductCard } from "../components/organism/CardProducto";
import { HomeTemplate } from "../components/template/HomeTemplate";
import "../styles/pages/homePage.css";

export  function Home() {
  const [nombreProducto, setNombreProducto] = useState("");

  function agregarProducto(nombre) {
    console.log("Producto agregado:", nombre);
    setNombreProducto(nombre);

    setTimeout(() => {
      setNombreProducto("");
    }, 3000);
  
  }
  return (
    <div>
        <HomeTemplate stock={productosCatalogo.length} nombreProducto={nombreProducto}>
            {productosCatalogo.map((product) => (
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