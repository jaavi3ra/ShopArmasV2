
import React from "react";
import "../../styles/pages/adminPage.css";

export function AdminTemplate({
  vista,
  productos,
  formulario,
  productoEditando,
  onMostrarProductos,
  onMostrarFormulario,
  onVolverTienda,
  onCambioFormulario,
  onGuardarProducto,
  onCancelarEdicion,
  onEditarProducto,
  onEliminarProducto,
}) {
  return (
    <main className="admin-page">
      <div className="admin-layout">
        <aside className="admin-sidebar">
          <h2 className="admin-logo">ShopArmas</h2>
          <p>Panel de administración</p>

          <nav className="admin-menu">
            <button
              type="button"
              className={vista === "productos" ? "active" : ""}
              onClick={onMostrarProductos}
            >
              Productos
            </button>

            <button
              type="button"
              className={vista === "agregar" ? "active" : ""}
              onClick={onMostrarFormulario}
            >
              Agregar producto
            </button>

            <button
              type="button"
              className="admin-logout"
              onClick={onVolverTienda}
            >
              Volver a la tienda
            </button>
          </nav>
        </aside>

        <section className="admin-content">
          <div className="admin-header">
            <div>
              <h1>Administrador</h1>
              <p>Gestiona los productos de ShopArmasV2.</p>
            </div>

            <div className="admin-stock">
              Productos: {productos.length}
            </div>
          </div>

          {vista === "agregar" && (
            <section className="admin-panel">
              <h2>
                {productoEditando
                  ? "Editar producto"
                  : "Agregar producto"}
              </h2>

              <form
                className="admin-form"
                onSubmit={onGuardarProducto}
              >
                <div className="admin-field">
                  <label htmlFor="adminNombre">Nombre</label>
                  <input
                    id="adminNombre"
                    name="name"
                    value={formulario.name}
                    onChange={onCambioFormulario}
                    required
                  />
                </div>

                <div className="admin-field">
                  <label htmlFor="adminCategoria">Categoría</label>
                  <select
                    id="adminCategoria"
                    name="category"
                    value={formulario.category}
                    onChange={onCambioFormulario}
                  >
                    <option value="Pistola">Pistola</option>
                    <option value="Subfusil">Subfusil</option>
                    <option value="Rifle">Rifle</option>
                    <option value="Escopeta">Escopeta</option>
                    <option value="Cuerpo a cuerpo">
                      Cuerpo a cuerpo
                    </option>
                    <option value="Municion">Munición</option>
                  </select>
                </div>

                <div className="admin-field">
                  <label htmlFor="adminPrecio">Precio</label>
                  <input
                    id="adminPrecio"
                    type="number"
                    name="price"
                    min="0"
                    value={formulario.price}
                    onChange={onCambioFormulario}
                    required
                  />
                </div>

                <div className="admin-field">
                  <label htmlFor="adminRp">Puntos RP</label>
                  <input
                    id="adminRp"
                    type="number"
                    name="rp"
                    min="0"
                    value={formulario.rp}
                    onChange={onCambioFormulario}
                  />
                </div>

                <div className="admin-field full-width">
                  <label htmlFor="adminImagen">URL de imagen</label>
                  <input
                    id="adminImagen"
                    type="url"
                    name="image"
                    value={formulario.image}
                    onChange={onCambioFormulario}
                    placeholder="https://..."
                  />
                </div>

                <div className="admin-field">
                  <label htmlFor="adminDano">Daño (0-100)</label>
                  <input
                    id="adminDano"
                    type="number"
                    name="damage"
                    min="0"
                    max="100"
                    value={formulario.damage}
                    onChange={onCambioFormulario}
                    required
                  />
                </div>

                <div className="admin-field">
                  <label htmlFor="adminPrecision">
                    Precisión (0-100)
                  </label>
                  <input
                    id="adminPrecision"
                    type="number"
                    name="accuracy"
                    min="0"
                    max="100"
                    value={formulario.accuracy}
                    onChange={onCambioFormulario}
                    required
                  />
                </div>

                <div className="admin-field">
                  <label htmlFor="adminAlcance">
                    Alcance (0-100)
                  </label>
                  <input
                    id="adminAlcance"
                    type="number"
                    name="range"
                    min="0"
                    max="100"
                    value={formulario.range}
                    onChange={onCambioFormulario}
                    required
                  />
                </div>

                <div className="admin-form-actions">
                  <button type="submit" className="admin-btn">
                    {productoEditando
                      ? "Guardar cambios"
                      : "Crear producto"}
                  </button>

                  <button
                    type="button"
                    className="admin-btn secondary"
                    onClick={onCancelarEdicion}
                  >
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

                <button
                  type="button"
                  className="admin-btn"
                  onClick={onMostrarFormulario}
                >
                  + Nuevo producto
                </button>
              </div>

              {productos.length === 0 ? (
                <p className="admin-empty">
                  No hay productos registrados.
                </p>
              ) : (
                <div className="admin-product-grid">
                  {productos.map((producto) => (
                    <article
                      className="admin-product-card"
                      key={producto.id}
                    >
                      <div className="admin-product-image">
                        <img
                          src={producto.image}
                          alt={producto.name}
                          onError={(evento) => {
                            evento.currentTarget.style.visibility =
                              "hidden";
                          }}
                        />
                      </div>

                      <span className="admin-product-category">
                        {producto.category}
                      </span>

                      <h3>{producto.name}</h3>

                      <p className="admin-product-price">
                        $
                        {Number(producto.price).toLocaleString("es-CL")}
                      </p>

                      <div className="admin-product-stats">
                        <span>
                          Daño: {producto.stats.damage}
                        </span>
                        <span>
                          Precisión: {producto.stats.accuracy}
                        </span>
                        <span>
                          Alcance: {producto.stats.range}
                        </span>
                        <span>RP: {producto.rp ?? 0}</span>
                      </div>

                      <div className="admin-product-actions">
                        <button
                          type="button"
                          className="admin-btn"
                          onClick={() => onEditarProducto(producto)}
                        >
                          Editar
                        </button>

                        <button
                          type="button"
                          className="admin-btn danger"
                          onClick={() => onEliminarProducto(producto.id)}
                        >
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
      </div>
    </main>
  );
}
