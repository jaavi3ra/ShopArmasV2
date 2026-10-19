import React from "react";
import { render, screen } from "@testing-library/react";
import { EyebrowText } from "../../components/atomic/Etiqueta";
describe("EyebrowText", () => {
  it("muestra el texto recibido", () => {
    render(<EyebrowText>Novedades</EyebrowText>);

    expect(screen.getByText("Novedades")).toBeTruthy();
  });

  it("aplica la clase eyebrow", () => {
    render(<EyebrowText>Destacados</EyebrowText>);

    const etiqueta = screen.getByText("Destacados");

    expect(etiqueta.classList.contains("eyebrow")).toBe(true);
  });

  it("permite elementos como children", () => {
    render(
      <EyebrowText>
        <strong>Oferta especial</strong>
      </EyebrowText>
    );

    const contenido = screen.getByText("Oferta especial");

    expect(contenido.tagName).toBe("STRONG");
    expect(contenido.parentElement.classList.contains("eyebrow")).toBe(true);
  });
});