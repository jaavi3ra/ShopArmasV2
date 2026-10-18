import React from "react";
import { render, screen } from "@testing-library/react";
import { MensajeSpan } from "../../components/molecule/mensajeSpan";

describe("MensajeSpan", () => {
    it("renderiza el mensaje al agregar un producto", () => {
        const texto = "Pistola";
        render(<MensajeSpan texto={texto} />);
        expect(screen.getByText("Agregaste Pistola al carrito!")).toBeTruthy();
    });

    it("muestra el texto recibido mediante props", () => {
        const texto = "Rifle";
        render(<MensajeSpan texto={texto} />);
        expect(screen.getByText(`Agregaste ${texto} al carrito!`)).toBeTruthy();
    });

    it("aplica la clase CSS recibida", () => {
        const { container } = render(<MensajeSpan texto="Pistola" className="mensaje-exito" />);
        expect(container.querySelector(".mensaje-exito")).toBeTruthy();
    });
});