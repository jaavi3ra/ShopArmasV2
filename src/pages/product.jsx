import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { productosCatalogo } from '../data/productos';
import { ProductTemplate } from '../components/template/ProductTemplate';
import '../styles/pages/product.css';

export function Product({ agregarAlCarrito }) {
  const { id } = useParams();
  // Cantidad ed seleccion del producto
  const [cantidad, setCantidad] = useState(1);

  // Gestión de lógica: búsqueda del producto dinámico por id
  const producto = productosCatalogo.find((item) => item.id === id);

  return (
    <div className="product-page">
      <ProductTemplate
        producto={producto}
        cantidad={cantidad}
        onCantidadChange={setCantidad}
        onAddToCart={agregarAlCarrito}/>
    </div>
  );
}