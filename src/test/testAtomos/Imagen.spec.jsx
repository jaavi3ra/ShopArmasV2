import React from "react";
import { render, screen } from "@testing-library/react";
import { Imagen } from "../../components/atomic/Imagen";

describe("Imagen", () => {
  it("aplica la ruta y el texto alternativo recibidos", () => {
    render(
      <Imagen src="/images/producto.png" alt="Imagen del producto" />
    );

    const imagen = screen.getByRole("img", {
      name: "Imagen del producto",
    });

    expect(imagen.getAttribute("src")).toBe("/images/producto.png");
    expect(imagen.getAttribute("alt")).toBe("Imagen del producto");
  });

  it("aplica la clase recibida por props", () => {
    render(
      <Imagen
        src="/images/producto.png"
        alt="Producto destacado"
        className="imagen-producto"
      />
    );

    const imagen = screen.getByRole("img", {
      name: "Producto destacado",
    });

    expect(imagen.classList.contains("imagen-producto")).toBe(true);
  });

  it("actualiza la imagen cuando cambian las props", () => {
    const { rerender } = render(
      <Imagen src="/images/uno.png" alt="Primer producto" />
    );

    rerender(
      <Imagen src="/images/dos.png" alt="Segundo producto" />
    );

    const imagen = screen.getByRole("img", {
      name: "Segundo producto",
    });

    expect(imagen.getAttribute("src")).toBe("/images/dos.png");
    expect(screen.queryByAltText("Primer producto")).toBeNull();
  });
});