
import { useState } from "react";
import { CheckoutTemplate } from "../components/template/CheckoutTemplate";

export function Checkout() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    entrega: "despacho",
    direccion: "",
    comuna: "",
    pago: "tarjeta",
  });

  const productos = [
    { id: 1, nombre: "Desert Eagle", precio: 12500, cantidad: 1 },
    { id: 2, nombre: "Micro SMG", precio: 8900, cantidad: 2 },
  ];

  const total = productos.reduce(
    (suma, producto) =>
      suma + producto.precio * producto.cantidad,
    0
  );

  function actualizarCampo(campo, valor) {
    setDatos((datosActuales) => ({
      ...datosActuales,
      [campo]: valor,
    }));
  }

  function enviarFormulario(evento) {
    evento.preventDefault();

    if (!datos.nombre.trim()) {
      alert("Debe ingresar su nombre.");
      return;
    }

    if (!datos.correo.trim()) {
      alert("Debe ingresar su correo.");
      return;
    }

    if (!datos.telefono.trim()) {
      alert("Debe ingresar su teléfono.");
      return;
    }

    if (
      datos.entrega === "despacho" &&
      (!datos.direccion.trim() || !datos.comuna.trim())
    ) {
      alert("Debe ingresar su dirección y comuna.");
      return;
    }

    alert("Datos de compra validados correctamente.");
  }

  function formatoPrecio(precio) {
    return `$${precio.toLocaleString("es-CL")}`;
  }

  return (
    <CheckoutTemplate
      datos={datos}
      onNombreChange={(evento) =>
        actualizarCampo("nombre", evento.target.value)
      }
      onCorreoChange={(evento) =>
        actualizarCampo("correo", evento.target.value)
      }
      onTelefonoChange={(evento) =>
        actualizarCampo("telefono", evento.target.value)
      }
      onDireccionChange={(evento) =>
        actualizarCampo("direccion", evento.target.value)
      }
      onComunaChange={(evento) =>
        actualizarCampo("comuna", evento.target.value)
      }
      onEntregaChange={(evento) =>
        actualizarCampo("entrega", evento.target.value)
      }
      onPagoChange={(evento) =>
        actualizarCampo("pago", evento.target.value)
      }
      onSubmit={enviarFormulario}
      productos={productos}
      total={total}
      formatoPrecio={formatoPrecio}
    />
  );
}
