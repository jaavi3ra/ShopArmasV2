import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { HomeTemplate } from "../../components/template/HomeTemplate";

describe("HomeTemplate", () => {
  it("ejecuta la acción al seleccionar un filtro", () => {
    const onFilterChange = jasmine.createSpy("onFilterChange");

    render(
      <MemoryRouter>
        <HomeTemplate
          stock={1}
          activeFilter="Todos"
          onFilterChange={onFilterChange}
        />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Pistolas" })
    );

    expect(onFilterChange).toHaveBeenCalledTimes(1);
    expect(onFilterChange).toHaveBeenCalledWith("Pistola");
  });

  it("permite navegar mediante un enlace del catálogo", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={
              <HomeTemplate stock={1}>
                <Link to="/producto/1">Ver producto</Link>
              </HomeTemplate>
            }
          />
          <Route
            path="/producto/1"
            element={<h1>Detalle del producto</h1>}
          />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("link", { name: "Ver producto" })
    );

    expect(
      await screen.findByRole("heading", {
        name: "Detalle del producto",
      })
    ).toBeTruthy();
  });

  it("muestra un mensaje cuando no hay productos", () => {
    render(
      <MemoryRouter>
        <HomeTemplate stock={0} />
      </MemoryRouter>
    );

    expect(screen.getByRole("status").textContent)
      .toBe("No hay productos disponibles");
  });
});