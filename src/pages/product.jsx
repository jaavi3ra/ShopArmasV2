import { useParams, useNavigate } from 'react-router-dom';
import { productosCatalogo } from '../data/productos';
import { ProductTemplate } from '../components/template/ProductTemplate';
import { Boton } from '../components/atomic/Boton';
import '../styles/pages/product.css';

export function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Gestión de lógica: búsqueda del producto dinámico por id
  const producto = productosCatalogo.find((item) => item.id === id);

  // Manejo de contingencia si el producto no existe
  if (!producto) {
    return (
      <div className="detalle-producto" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>Producto no encontrado</h2>
        <p style={{ color: 'var(--muted, #9d9aa7)', marginBottom: '30px' }}>
          El arma o producto solicitado no existe en el catálogo.
        </p>
        <Boton
          className="btn-comprar-custom"
          onClick={() => navigate('/home')}
          style={{ display: 'inline-block', minWidth: '160px' }}
        >
          Volver al Catálogo
        </Boton>
      </div>
    );
  }

  return (
    <div className="product-page">
      <ProductTemplate producto={producto} />
    </div>
  );
}