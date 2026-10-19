import React from "react";
import { render, screen } from "@testing-library/react";
import { StatRow } from "../../components/molecule/StatRow";

describe("StatRow", () => {
    it("renderiza la etiqueta de la estadística", () => {
        render(<StatRow label="Daño" value={75} />);
        expect(screen.getByText("Daño")).toBeTruthy();
    });

    it("muestra el valor recibido", () => {
        render(<StatRow label="Daño" value={75} />);
        expect(screen.getByText("75")).toBeTruthy();
    });

    it("establece el ancho de la barra según el valor", () => {
        const { container } = render(<StatRow label="Daño" value={75} />);
        expect(container.querySelector(".stat-value").style.width).toBe("75%");
    });
});