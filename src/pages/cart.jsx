
import { CartTemplate } from "../components/template/CartTemplate";
import { useNavigate } from "react-router-dom";

export function Cart({ carrito, setCarrito }) {
  const navigate = useNavigate();

  const productos = carrito.map((producto) => ({
    ...producto,
    price: producto.price,
    quantity: producto.quantity,
  }));

  const total = productos.reduce(
    (suma, producto) =>
      suma + producto.price * producto.quantity,
    0
  );

  function formatoPrecio(precio) {
    return `$${precio.toLocaleString("es-CL")}`;
  }

  return (
    <CartTemplate
      productos={productos}
      total={total}
      formatoPrecio={formatoPrecio}
      onContinuarComprando={() => navigate("/home")}
      onFinalizarCompra={() => navigate("/checkout")}
      onSumarCantidad={(id) =>
        setCarrito((carritoActual) =>
          carritoActual.map((producto) =>
            producto.id === id
              ? { ...producto, quantity: producto.quantity + 1 }
              : producto
          )
        )
      }
      onRestarCantidad={(id) =>
        setCarrito((carritoActual) =>
          carritoActual
            .map((producto) =>
              producto.id === id
                ? { ...producto, quantity: producto.quantity - 1 }
                : producto
            )
            .filter((producto) => producto.quantity > 0)
        )
      }
    />
  );
}
