import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "../../pages/Home";
import { obtenerTodosLosProductos } from "../../data/productosAdmin";

describe("Home", () => {
  function renderizarHome() {
    return render(
      <MemoryRouter>
        <Home
          agregarAlCarrito={jasmine.createSpy("agregarAlCarrito")}
          carrito={[]}
        />
      </MemoryRouter>
    );
  }

  it("muestra el título del catálogo", () => {
    renderizarHome();

    expect(
      screen.getByRole("heading", {
        name: "Productos disponibles",
      })
    ).toBeTruthy();
  });

  it("muestra la cantidad de productos en stock", () => {
    const productos = obtenerTodosLosProductos();

    renderizarHome();

    expect(
      screen.getByText(`${productos.length} artículos en stock`)
    ).toBeTruthy();
  });

  it("muestra los nombres de los productos del catálogo", () => {
    const productos = obtenerTodosLosProductos();

    // Evita que la prueba pase sin comprobar ningún producto.
    expect(productos.length).toBeGreaterThan(0);

    renderizarHome();

    productos.forEach((producto) => {
      expect(
        screen.getAllByText(producto.name).length
      ).toBeGreaterThan(0);
    });
  });
});