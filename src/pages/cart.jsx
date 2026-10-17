
import { CartTemplate } from "../components/template/CartTemplate";

export function Cart() {
  const productos = [
    {
      id: 1,
      name: "Desert Eagle",
      category: "Pistola",
      price: 12500,
      quantity: 1,
      image: "/-img/static_wikia_nocookie_net-latest.webp",
    },
    {
      id: 2,
      name: "Micro SMG",
      category: "Subfusil",
      price: 8900,
      quantity: 2,
      image: "/-img/MicroSMG-GTAVC.webp",
    },
  ];

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
    />
  );
}
