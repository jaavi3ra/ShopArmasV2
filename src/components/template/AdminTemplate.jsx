
import React from "react";

import { Boton } from "../atomic/Boton";
import { Texto } from "../atomic/Texto";
import { Imagen } from "../atomic/Imagen";
import { EyebrowText } from "../atomic/Etiqueta";

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

        {/* Menú lateral */}
        <aside className="admin-sidebar">
          <Texto variant="h2" className="admin-logo">
            ShopArmas
          </Texto>

          <Texto variant="p">
            Panel de administración
          </Texto>

          <nav className="admin-menu">
            <Boton
              className={vista === "productos" ? "active" : ""}
              onClick={onMostrarProductos}
            >
              Productos
            </Boton>

            <Boton
              className={vista === "agregar" ? "active" : ""}
              onClick={onMostrarFormulario}
            >
              Agregar producto
            </Boton>

            <Boton
              className="admin-logout"
              onClick={onVolverTienda}
            >
              Volver a la tienda
            </Boton>
          </nav>
        </aside>

        {/* Contenido principal */}
        <section className="admin-content">

          
        {/* Encabezado administrativo */}
        <div className="admin-header">
          <div className="admin-heading">
            <EyebrowText>PANEL DE CONTROL</EyebrowText>

            <Texto variant="h1">
              Gestión de productos
            </Texto>

            <Texto variant="p" className="admin-description">
              Administra el catálogo, los precios y las características
              de los productos.
            </Texto>
          </div>

          <div className="admin-stock">
            Productos: {productos.length}
          </div>
        </div>


          {/* Formulario para crear o editar */}
          {vista === "agregar" && (
            <section className="admin-panel">
              <Texto variant="h2">
                {productoEditando
                  ? "Editar producto"
                  : "Agregar producto"}
              </Texto>

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
                  <label htmlFor="adminCategoria">
                    Categoría
                  </label>

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
                  <label htmlFor="adminImagen">
                    URL de imagen
                  </label>

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
                  <button
                    type="submit"
                    className="admin-btn"
                  >
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

          {/* Listado de productos */}
          {vista === "productos" && (
            <section className="admin-panel">
              <div className="admin-header">
                <Texto variant="h2">
                  Productos disponibles
                </Texto>

                <Boton
                  className="admin-btn"
                  onClick={onMostrarFormulario}
                >
                  + Nuevo producto
                </Boton>
              </div>

              {productos.length === 0 ? (
                <Texto variant="p" className="admin-empty">
                  No hay productos registrados.
                </Texto>
              ) : (
                <div className="admin-product-grid">
                  {productos.map((producto) => (
                    <article
                      className="admin-product-card"
                      key={producto.id}
                    >
                      <div className="admin-product-image">
                        <Imagen
                          src={producto.image}
                          alt={producto.name}
                        />
                      </div>

                      <span className="admin-product-category">
                        {producto.category}
                      </span>

                      <Texto variant="h3">
                        {producto.name}
                      </Texto>

                      <Texto
                        variant="p"
                        className="admin-product-price"
                      >
                        $
                        {Number(producto.price).toLocaleString("es-CL")}
                      </Texto>

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

                        <span>
                          RP: {producto.rp ?? 0}
                        </span>
                      </div>

                      <div className="admin-product-actions">
                        <Boton
                          className="admin-btn"
                          onClick={() => onEditarProducto(producto)}
                        >
                          Editar
                        </Boton>

                        <Boton
                          className="admin-btn danger"
                          onClick={() => onEliminarProducto(producto.id)}
                        >
                          Eliminar
                        </Boton>
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
