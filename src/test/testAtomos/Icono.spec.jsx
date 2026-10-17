import React from "react";
import { render, screen } from "@testing-library/react";
import { Icono } from "../../components/atomic/Icono";

describe("Icono", () => {
  it("muestra el contenido recibido", () => {
    render(<Icono>★</Icono>);

    expect(screen.getByText("★")).toBeTruthy();
  });

  it("aplica un tamaño de 20px por defecto", () => {
    render(<Icono>★</Icono>);

    expect(screen.getByText("★").style.fontSize).toBe("20px");
  });

  it("aplica el tamaño recibido por props", () => {
    render(<Icono size={32}>★</Icono>);

    expect(screen.getByText("★").style.fontSize).toBe("32px");
  });

  it("agrega una clase personalizada y conserva la clase icon", () => {
    render(<Icono className="icono-carrito">★</Icono>);

    const icono = screen.getByText("★");

    expect(icono.classList.contains("icon")).toBe(true);
    expect(icono.classList.contains("icono-carrito")).toBe(true);
  });
});