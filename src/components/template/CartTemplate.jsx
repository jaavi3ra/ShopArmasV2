
import { useNavigate } from "react-router-dom";
import { Imagen } from "../atomic/Imagen";
import { Boton } from "../atomic/Boton";
import { Divider } from "../atomic/Divider";
import { EyebrowText } from "../atomic/Etiqueta";

import "../../styles/pages/cartPage.css";

export function CartTemplate({
  productos,
  total,
  formatoPrecio,
  onContinuarComprando,
  onFinalizarCompra,
  onSumarCantidad,
  onRestarCantidad,
}) {
    const navigate = useNavigate();
    const cantidadTotal = productos.reduce(
    (suma, producto) => suma + producto.quantity,
    0
  );

  return (
    <main id="carrito-content">
      <h2>TU CARRITO</h2>

      <div id="contenedor-carrito">
        <section id="lista-carrito">
          <div className="encabezado-carrito">
            <span>PRODUCTO</span>
            <span>PRECIO</span>
            <span>CANTIDAD</span>
          </div>

          <div id="productos-carrito">
            {productos.length === 0 ? (
              <p>Tu carrito está vacío.</p>
            ) : (
              productos.map((producto) => (
                <article
                  className="producto-carrito"
                  key={producto.id}
                >
                  <div className="info-producto">
                    <Imagen
                      src={producto.image}
                      alt={producto.name}
                    />

                    <div>
                      <span className="product-category">
                        {producto.category}
                      </span>

                      <h3 className="name-product">
                        {producto.name}
                      </h3>
                    </div>
                  </div>

                  <span className="product-price">
                    {formatoPrecio(producto.price)}
                  </span>

                  <div className="controles-cantidad">
                    <button type="button" onClick={() => onRestarCantidad(producto.id)}>
                        -
                    </button>
                    <span>{producto.quantity}</span>
                    <button type="button" onClick={() => onSumarCantidad(producto.id)}>
                        +
                    </button>
                    </div>
                </article>
              ))
            )}
          </div>

          <Boton className="boton-seguir-comprando" onClick={onContinuarComprando}>
            ← SEGUIR COMPRANDO
          </Boton>
        </section>

        <aside id="resumen-carrito">
          <h3>RESUMEN DEL PEDIDO</h3>

          <div className="linea-resumen">
            <span>Subtotal</span>
            <span>{formatoPrecio(total)}</span>
          </div>

          <div className="linea-resumen">
            <span>Envío</span>
            <span>$0</span>
          </div>

          <Divider />

          <div className="linea-resumen total">
            <span>TOTAL</span>
            <span>{formatoPrecio(total)}</span>
          </div>

          <Boton className="boton-finalizar" onClick={onFinalizarCompra}>
            FINALIZAR COMPRA
            </Boton>

          <p className="cart-summary-note">
            El envío se confirmará durante el proceso de compra.
          </p>
        </aside>
      </div>
    </main>
  );
}
