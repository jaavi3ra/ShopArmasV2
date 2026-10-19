import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "../../components/atomic/Link";

describe("NavLink", () => {
  it("muestra el texto y la ruta recibidos", () => {
    render(
      <MemoryRouter>
        <NavLink text="Productos" to="/productos" />
      </MemoryRouter>
    );

    const enlace = screen.getByRole("link", { name: "Productos" });

    expect(enlace.getAttribute("href")).toBe("/productos");
  });

  it("aplica la clase nav-link", () => {
    render(
      <MemoryRouter>
        <NavLink text="Inicio" to="/" />
      </MemoryRouter>
    );

    const enlace = screen.getByRole("link", { name: "Inicio" });

    expect(enlace.classList.contains("nav-link")).toBe(true);
  });

  it("navega a la página indicada al hacer clic", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={<NavLink text="Ver productos" to="/productos" />}
          />
          <Route
            path="/productos"
            element={<h1>Catálogo de productos</h1>}
          />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("link", { name: "Ver productos" })
    );

    const titulo = await screen.findByRole("heading", {
      name: "Catálogo de productos",
    });

    expect(titulo).toBeTruthy();
  });
});