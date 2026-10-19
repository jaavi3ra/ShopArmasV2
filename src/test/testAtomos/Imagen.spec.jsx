import React from "react";
import { render, screen } from "@testing-library/react";
import { Imagen } from "../../components/atomic/Imagen";

describe("Imagen", () => {
  it("aplica la ruta y el texto alternativo recibidos", () => {
    render(
      <Imagen src="/-img/Pistola.jpg" alt="Imagen del producto" />
    );

    const imagen = screen.getByRole("img", {
      name: "Imagen del producto",
    });

    expect(imagen.getAttribute("src")).toBe("/-img/Pistola.jpg");
    expect(imagen.getAttribute("alt")).toBe("Imagen del producto");
  });

  it("aplica la clase recibida por props", () => {
    render(
      <Imagen
        src="/-img/Pistola.jpg"
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
      <Imagen src="/-img/Pistola.jpg" alt="Primer producto" />
    );

    rerender(
      <Imagen src="/-img/pistola2.jpg" alt="Segundo producto" />
    );

    const imagen = screen.getByRole("img", {
      name: "Segundo producto",
    });

    expect(imagen.getAttribute("src")).toBe("/-img/pistola2.jpg");
    expect(screen.queryByAltText("Primer producto")).toBeNull();
  });
});