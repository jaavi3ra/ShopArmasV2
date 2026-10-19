import React from "react";
import { render, screen } from "@testing-library/react";
import { FormTitle } from "../../components/molecule/FormTitle";

describe("FormTitle", () => {
    it("renderiza el eyebrow", () => {
        render(<FormTitle eyebrow="BIENVENIDO" title="Iniciar sesión" description="Ingresa a tu cuenta" />);
        expect(screen.getByText("BIENVENIDO")).toBeTruthy();
    });

    it("renderiza el título", () => {
        render(<FormTitle eyebrow="BIENVENIDO" title="Iniciar sesión" description="Ingresa a tu cuenta" />);
        expect(screen.getByText("Iniciar sesión")).toBeTruthy();
    });

    it("renderiza la descripción", () => {
        render(<FormTitle eyebrow="BIENVENIDO" title="Iniciar sesión" description="Ingresa a tu cuenta" />);
        expect(screen.getByText("Ingresa a tu cuenta")).toBeTruthy();
    });
});