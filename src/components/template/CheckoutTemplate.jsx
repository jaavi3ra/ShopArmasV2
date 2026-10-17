
import { Input } from "../atomic/Input";
import { Boton } from "../atomic/Boton";
import { Divider } from "../atomic/Divider";
import { EyebrowText } from "../atomic/Etiqueta";
import { NavLink } from "../atomic/Link";

import "../../styles/pages/checkoutPage.css";

export function CheckoutTemplate({
  datos,
  onNombreChange,
  onCorreoChange,
  onTelefonoChange,
  onDireccionChange,
  onComunaChange,
  onEntregaChange,
  onPagoChange,
  onSubmit,
  productos,
  total,
  formatoPrecio,
}) {
  return (
    <main id="checkout-content">
      <h2>FINALIZAR COMPRA</h2>

      <div id="contenedor-checkout">
        <form id="datos-compra" onSubmit={onSubmit}>
          <h3>DATOS DE ENTREGA</h3>

          <div className="campo-formulario">
            <label>Nombre completo</label>
            <Input
              type="text"
              placeholder="Ingrese su nombre"
              value={datos.nombre}
              onChange={onNombreChange}
              className="checkout-input"
            />
          </div>

          <div className="campo-formulario">
            <label>Correo electrónico</label>
            <Input
              type="email"
              placeholder="Ingrese su correo"
              value={datos.correo}
              onChange={onCorreoChange}
              className="checkout-input"
            />
          </div>

          <div className="campo-formulario">
            <label>Teléfono</label>
            <Input
              type="tel"
              placeholder="Ingrese su teléfono"
              value={datos.telefono}
              onChange={onTelefonoChange}
              className="checkout-input"
            />
          </div>

          <h3>TIPO DE ENTREGA</h3>

          <div className="opciones">
            <label>
              <input
                type="radio"
                name="entrega"
                value="despacho"
                checked={datos.entrega === "despacho"}
                onChange={onEntregaChange}
              />
              Despacho a domicilio
            </label>

            <label>
              <input
                type="radio"
                name="entrega"
                value="retiro"
                checked={datos.entrega === "retiro"}
                onChange={onEntregaChange}
              />
              Retiro en tienda
            </label>
          </div>

          {datos.entrega === "despacho" && (
            <div id="datos-despacho">
              <div className="campo-formulario">
                <label>Dirección</label>
                <Input
                  type="text"
                  placeholder="Ingrese su dirección"
                  value={datos.direccion}
                  onChange={onDireccionChange}
                  className="checkout-input"
                />
              </div>

              <div className="campo-formulario">
                <label>Comuna</label>
                <Input
                  type="text"
                  placeholder="Ingrese su comuna"
                  value={datos.comuna}
                  onChange={onComunaChange}
                  className="checkout-input"
                />
              </div>
            </div>
          )}

          <h3>MEDIO DE PAGO</h3>

          <div className="opciones">
            <label>
              <input
                type="radio"
                name="pago"
                value="tarjeta"
                checked={datos.pago === "tarjeta"}
                onChange={onPagoChange}
              />
              Tarjeta de crédito/débito
            </label>

            <label>
              <input
                type="radio"
                name="pago"
                value="transferencia"
                checked={datos.pago === "transferencia"}
                onChange={onPagoChange}
              />
              Transferencia bancaria
            </label>
          </div>

          <Boton className="checkout-submit">
            CONFIRMAR COMPRA
          </Boton>
        </form>

        <aside id="resumen-checkout">
          <h3>RESUMEN DE COMPRA</h3>

          <div id="productos-checkout">
            {productos.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              productos.map((producto) => (
                <div className="producto-checkout" key={producto.id}>
                  <span>
                    {producto.nombre} x{producto.cantidad}
                  </span>

                  <span>
                    {formatoPrecio(
                      producto.precio * producto.cantidad
                    )}
                  </span>
                </div>
              ))
            )}
          </div>

          <Divider />

          <div className="linea-checkout">
            <span>Subtotal</span>
            <span>{formatoPrecio(total)}</span>
          </div>

          <div className="linea-checkout">
            <span>Envío</span>
            <span>$0</span>
          </div>

          <Divider />

          <div className="linea-checkout total-checkout">
            <span>TOTAL</span>
            <span>{formatoPrecio(total)}</span>
          </div>

          <p className="checkout-summary-note">
            El pago y el envío se confirmarán al finalizar el pedido.
          </p>
        </aside>
      </div>

      <div className="checkout-back">
        <NavLink to="/cart" text="← VOLVER AL CARRITO" />
      </div>
    </main>
  );
}
