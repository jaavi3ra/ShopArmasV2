
import { productosCatalogo } from "./productos.js";

export function obtenerTodosLosProductos() {
  const productosGuardados = JSON.parse(
    localStorage.getItem("productosAdmin") || "[]"
  );

  const productosEliminados = JSON.parse(
    localStorage.getItem("productosEliminados") || "[]"
  );

  const productosActualizados = JSON.parse(
    localStorage.getItem("productosActualizados") || "{}"
  );

  const productosIniciales = productosCatalogo
    .filter((producto) => !productosEliminados.includes(producto.id))
    .map((producto) => productosActualizados[producto.id] || producto);

  return [...productosIniciales, ...productosGuardados];
}
