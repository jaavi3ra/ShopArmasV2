import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Boton } from '../atomic/Boton';
import { EyebrowText } from '../atomic/Etiqueta';
import { ProductRelacionado } from '../molecule/ProductRelacionado';
import { productosCatalogo } from '../../data/productos';
import { StatRow } from '../molecule/StatRow';
import { CantidadSeleccion } from '../atomic/CantidadSeleccion.jsx';
import '../../styles/pages/product.css';

export function ProductTemplate({ producto, onAddToStash, cantidad, onCantidadChange }) {
    const navigate = useNavigate();

    // Gestión de imagen seleccionada en galería de miniaturas
    const [selectedImage, setSelectedImage] = useState(null);
    const [prevProductId, setPrevProductId] = useState(producto?.id);

    if (producto?.id !== prevProductId) {
        setPrevProductId(producto?.id);
        setSelectedImage(null);
    }

    if (!producto) {
        return null;
    }

    const {
        name = '',
        category = '',
        price = 0,
        rp = 0,
        description = '',
        image = '',
        images = [],
        badge = '',
        stats = { damage: 0, accuracy: 0, range: 0 }
    } = producto;

    const galeriaImagenes = Array.isArray(images) && images.length > 0
        ? images
        : (image ? [image] : []);

    const imagenActiva = selectedImage || image || galeriaImagenes[0] || '';

    // Obtener productos relacionados excluyendo el actual
    const productosRelacionados = productosCatalogo
        .filter((item) => item.id !== producto.id)
        .slice(0, 3);

    const handleStash = () => {
        if (onAddToStash) {
            onAddToStash(producto);
        } else {
            console.log(`Producto ${name} agregado al stash.`);
        }
    };

    return (
        <div className="detalle-producto">
            {/* 1. Ruta de navegación / Breadcrumb */}
            <nav className="breadcrumb">
                <Link to="/home">Home</Link> / <span id="breadcrumbProducto">{name}</span>
            </nav>

            {/* 2. Sección Principal de 2 Columnas (Atomic / Layout) */}
            <div className="producto">
                {/* Columna Izquierda: Imágenes (60%) */}
                <div className="producto-imagenes">
                    <img src={imagenActiva} alt={name} />

                    {galeriaImagenes.length > 1 && (
                        <div className="galeria-miniaturas">
                            {galeriaImagenes.map((img, idx) => (
                                <Boton
                                    key={idx}
                                    type="button"
                                    className={`galeria-miniatura-btn ${imagenActiva === img ? 'activa' : ''}`}
                                    onClick={() => setSelectedImage(img)}
                                    aria-label={`Ver imagen ${idx + 1} de ${name}`}
                                >
                                    <img src={img} alt={`${name} ${idx + 1}`} />
                                </Boton>
                            ))}
                        </div>
                    )}
                </div>

                {/* Columna Derecha: Información y Estadísticas (40%) */}
                <div className="producto-info">
                    <div className="producto-titulo">
                        <div>
                            <div className="producto-categoria">
                                <EyebrowText>{category}</EyebrowText>
                                {badge && (
                                    <span className="producto-badge">
                                        {badge}
                                    </span>
                                )}
                            </div>
                            <h1 className="name-product titulo-detalle">{name}</h1>
                        </div>

                        <div className="producto-precio">
                            <h2>${typeof price === 'number' ? price.toLocaleString() : price}</h2>
                            <span id="rpProducto">+{rp} RP</span>
                        </div>
                    </div>

                    <p>{description}</p>

                    {/* Barras de Estadísticas del Arma */}
                    {stats && (
                        <div className="weapon-stats">
                            <StatRow label="Daño" value={stats.damage ?? 0} />
                            <StatRow label="Precisión" value={stats.accuracy ?? 0} />
                            <StatRow label="Alcance" value={stats.range ?? 0} />
                        </div>
                    )}


                    {/* Selector de cantidad */}
                    <div className="cantidad-producto">
                        <CantidadSeleccion
                            id="cantidad-producto"
                            value={cantidad}
                            onChange={(e) =>
                                onCantidadChange(Number(e.target.value))
                            }
                        />
                    </div>

                    {/* Botones de acción */}
                    <div className="acciones-producto">
                        <Boton
                            className="btn-carrito-custom"
                            onClick={handleStash}
                        >
                            Añadir al Stash
                        </Boton>

                        <Boton
                            className="btn-comprar-custom"
                            onClick={() => navigate('/home')}
                        >
                            Volver
                        </Boton>
                    </div>
                </div>
            </div>

            {/* 3. Sección de Productos Relacionados */}
            <section className="productos-relacionados-seccion">
                <h2 className="productos-relacionados-titulo">
                    Productos relacionados
                </h2>

                <div className="productos-relacionados-grid">
                    {productosRelacionados.map((item) => (
                        <ProductRelacionado
                            key={item.id}
                            product={item}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
