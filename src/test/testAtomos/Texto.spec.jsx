import React from "react";
import { render, screen } from "@testing-library/react";
import { Texto } from "../../components/atomic/Texto";

describe("Texto", () => {
  it("muestra el contenido como párrafo por defecto", () => {
    render(<Texto>Texto de ejemplo</Texto>);

    const texto = screen.getByText("Texto de ejemplo");

    expect(texto.tagName).toBe("P");
  });

  it("utiliza la etiqueta indicada en variant", () => {
    render(<Texto variant="h2">Nuestros productos</Texto>);

    const titulo = screen.getByRole("heading", {
      name: "Nuestros productos",
      level: 2,
    });

    expect(titulo.tagName).toBe("H2");
  });

  it("aplica la clase recibida por props", () => {
    render(<Texto className="texto-destacado">Oferta especial</Texto>);

    const texto = screen.getByText("Oferta especial");

    expect(texto.classList.contains("texto-destacado")).toBe(true);
  });

  it("permite elementos como children", () => {
    render(
      <Texto>
        Producto <strong>destacado</strong>
      </Texto>
    );

    const contenido = screen.getByText("destacado");

    expect(contenido.tagName).toBe("STRONG");
    expect(contenido.parentElement.tagName).toBe("P");
  });
});