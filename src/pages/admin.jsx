
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
  <AdminTemplate
    vista={vista}
    productos={productos}
    formulario={formulario}
    productoEditando={productoEditando}
    onMostrarProductos={() => setVista("productos")}
    onMostrarFormulario={mostrarFormulario}
    onVolverTienda={() => navigate("/")}
    onCambioFormulario={manejarCambio}
    onGuardarProducto={guardarProducto}
    onCancelarEdicion={cancelarEdicion}
    onEditarProducto={editarProducto}
    onEliminarProducto={eliminarProducto}
  />
);

}
