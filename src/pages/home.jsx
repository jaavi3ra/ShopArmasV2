import { productosCatalogo } from "../data/productos";
import { ProductCard } from "../components/organism/CardProducto";
import { HomeTemplate } from "../components/template/HomeTemplate";
import "../styles/pages/homePage.css";

export  function Home() {
  return (
    <div>
        <HomeTemplate stock={productosCatalogo.length}>
            {productosCatalogo.map((product) => (
             <ProductCard
                key={product.id}
                product={product}
            />
      ))}
    </HomeTemplate>
    </div>
  );
}