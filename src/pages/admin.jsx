
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminTemplate } from "../components/template/AdminTemplate";
import { productosCatalogo } from "../data/productos";
import "../styles/pages/adminPage.css";

function obtenerProductosGuardados() {
  return JSON.parse(localStorage.getItem("productosAdmin") || "[]");
}

function obtenerProductosIniciales() {
  const productosGuardados = obtenerProductosGuardados();
  const productosEliminados = JSON.parse(localStorage.getItem("productosEliminados") || "[]");
  const productosActualizados = JSON.parse(localStorage.getItem("productosActualizados") || "{}");

  const productosIniciales = productosCatalogo
    .filter((producto) => !productosEliminados.includes(producto.id))
    .map((producto) => productosActualizados[producto.id] || producto);

  return [...productosIniciales, ...productosGuardados];
}

function formularioVacio() {
  return {
    name: "",
    category: "Pistola",
    price: "",
    rp: "",
    image: "",
    damage: 50,
    accuracy: 50,
    range: 50,
  };
}

export function Admin() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState(obtenerProductosIniciales);
  const [productoEditando, setProductoEditando] = useState(null);
  const [vista, setVista] = useState("productos");
  const [formulario, setFormulario] = useState(formularioVacio);

  function guardarProductos(nuevosProductos) {
    setProductos(nuevosProductos);

    const idsOriginales = productosCatalogo.map((producto) => producto.id);
    const productosNuevos = nuevosProductos.filter(
      (producto) => !idsOriginales.includes(producto.id)
    );
    const productosActualizados = {};

    nuevosProductos.forEach((producto) => {
      if (idsOriginales.includes(producto.id)) {
        productosActualizados[producto.id] = producto;
      }
    });

    const productosEliminados = idsOriginales.filter(
      (id) => !nuevosProductos.some((producto) => producto.id === id)
    );

    localStorage.setItem("productosAdmin", JSON.stringify(productosNuevos));
    localStorage.setItem("productosActualizados", JSON.stringify(productosActualizados));
    localStorage.setItem("productosEliminados", JSON.stringify(productosEliminados));
  }

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setFormulario({ ...formulario, [name]: value });
  }

  function editarProducto(producto) {
    setProductoEditando(producto.id);
    setFormulario({
      name: producto.name,
      category: producto.category,
      price: producto.price,
      rp: producto.rp ?? 0,
      image: producto.image || "",
      damage: producto.stats.damage,
      accuracy: producto.stats.accuracy,
      range: producto.stats.range,
    });
    setVista("agregar");
  }

  function guardarProducto(evento) {
    evento.preventDefault();

    const productoOriginal = productos.find((producto) => producto.id === productoEditando);
    const imagen = formulario.image || (
      productoOriginal ? productoOriginal.image : "/-img/static_wikia_nocookie_net-latest.webp"
    );

    const producto = {
      ...(productoOriginal || {}),
      id: productoEditando || (
        formulario.name.toLowerCase().trim().replace(/\s+/g, "-") + "-" + Date.now()
      ),
      name: formulario.name.trim(),
      category: formulario.category,
      price: Number(formulario.price),
      rp: Number(formulario.rp || 0),
      image: imagen,
      images: formulario.image ? [formulario.image] : (productoOriginal?.images || [imagen]),
      description: productoOriginal
        ? productoOriginal.description
        : "Producto administrado desde la página de administración.",
      stats: {
        damage: Number(formulario.damage),
        accuracy: Number(formulario.accuracy),
        range: Number(formulario.range),
      },
      badge: productoOriginal?.badge || "ADMIN",
    };

    let nuevosProductos;

    if (productoEditando) {
      nuevosProductos = productos.map((elemento) =>
        elemento.id === productoEditando ? producto : elemento
      );
    } else {
      nuevosProductos = [...productos, producto];
    }

    guardarProductos(nuevosProductos);
    setProductoEditando(null);
    setFormulario(formularioVacio());
    setVista("productos");
  }

  function eliminarProducto(id) {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmar) return;

    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    guardarProductos(nuevosProductos);
  }

  function cancelarEdicion() {
    setProductoEditando(null);
    setFormulario(formularioVacio());
    setVista("productos");
  }

  function mostrarFormulario() {
    setProductoEditando(null);
    setFormulario(formularioVacio());
    setVista("agregar");
  }

  return (
    <AdminTemplate>
      <aside className="admin-sidebar">
        <h2 className="admin-logo">ShopArmas</h2>
        <p>Panel de administración</p>

        <nav className="admin-menu">
          <button type="button" className={vista === "productos" ? "active" : ""} onClick={() => setVista("productos")}>
            Productos
          </button>
          <button type="button" className={vista === "agregar" ? "active" : ""} onClick={mostrarFormulario}>
            Agregar producto
          </button>
          <button type="button" onClick={() => navigate("/")} className="admin-logout">
            Volver a la tienda
          </button>
        </nav>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div>
            <h1>Administrador</h1>
            <p>Gestiona los productos de ShopArmasV2.</p>
          </div>
          <div className="admin-stock">Productos: {productos.length}</div>
        </header>

        {vista === "agregar" && (
          <section className="admin-panel">
            <h2>{productoEditando ? "Editar producto" : "Agregar producto"}</h2>

            <form className="admin-form" onSubmit={guardarProducto}>
              <div className="admin-field">
                <label htmlFor="adminNombre">Nombre</label>
                <input id="adminNombre" name="name" value={formulario.name} onChange={manejarCambio} required />
              </div>

              <div className="admin-field">
                <label htmlFor="adminCategoria">Categoría</label>
                <select id="adminCategoria" name="category" value={formulario.category} onChange={manejarCambio}>
                  <option value="Pistola">Pistola</option>
                  <option value="Subfusil">Subfusil</option>
                  <option value="Rifle">Rifle</option>
                  <option value="Escopeta">Escopeta</option>
                  <option value="Cuerpo a cuerpo">Cuerpo a cuerpo</option>
                  <option value="Municion">Munición</option>
                </select>
              </div>

              <div className="admin-field">
                <label htmlFor="adminPrecio">Precio</label>
                <input id="adminPrecio" type="number" name="price" min="0" value={formulario.price} onChange={manejarCambio} required />
              </div>

              <div className="admin-field">
                <label htmlFor="adminRp">Puntos RP</label>
                <input id="adminRp" type="number" name="rp" min="0" value={formulario.rp} onChange={manejarCambio} />
              </div>

              <div className="admin-field full-width">
                <label htmlFor="adminImagen">URL de imagen</label>
                <input id="adminImagen" type="url" name="image" value={formulario.image} onChange={manejarCambio} placeholder="https://..." />
              </div>

              <div className="admin-field">
                <label htmlFor="adminDano">Daño (0-100)</label>
                <input id="adminDano" type="number" name="damage" min="0" max="100" value={formulario.damage} onChange={manejarCambio} required />
              </div>

              <div className="admin-field">
                <label htmlFor="adminPrecision">Precisión (0-100)</label>
                <input id="adminPrecision" type="number" name="accuracy" min="0" max="100" value={formulario.accuracy} onChange={manejarCambio} required />
              </div>

              <div className="admin-field">
                <label htmlFor="adminAlcance">Alcance (0-100)</label>
                <input id="adminAlcance" type="number" name="range" min="0" max="100" value={formulario.range} onChange={manejarCambio} required />
              </div>

              <div className="admin-form-actions">
                <button type="submit" className="admin-btn">
                  {productoEditando ? "Guardar cambios" : "Crear producto"}
                </button>
                <button type="button" className="admin-btn secondary" onClick={cancelarEdicion}>
                  Cancelar
                </button>
              </div>
            </form>
          </section>
        )}

        {vista === "productos" && (
          <section className="admin-panel">
            <div className="admin-header">
              <h2>Productos disponibles</h2>
              <button type="button" className="admin-btn" onClick={mostrarFormulario}>
                + Nuevo producto
              </button>
            </div>

            {productos.length === 0 ? (
              <p className="admin-empty">No hay productos registrados.</p>
            ) : (
              <div className="admin-product-grid">
                {productos.map((producto) => (
                  <article className="admin-product-card" key={producto.id}>
                    <div className="admin-product-image">
                      <img src={producto.image} alt={producto.name} onError={(evento) => { evento.currentTarget.style.visibility = "hidden"; }} />
                    </div>
                    <span className="admin-product-category">{producto.category}</span>
                    <h3>{producto.name}</h3>
                    <p className="admin-product-price">${producto.price.toLocaleString("es-CL")}</p>

                    <div className="admin-product-stats">
                      <span>Daño: {producto.stats.damage}</span>
                      <span>Precisión: {producto.stats.accuracy}</span>
                      <span>Alcance: {producto.stats.range}</span>
                      <span>RP: {producto.rp ?? 0}</span>
                    </div>

                    <div className="admin-product-actions">
                      <button type="button" className="admin-btn" onClick={() => editarProducto(producto)}>
                        Editar
                      </button>
                      <button type="button" className="admin-btn danger" onClick={() => eliminarProducto(producto.id)}>
                        Eliminar
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </section>
    </AdminTemplate>
  );
}
