import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavMenu } from "../../components/molecule/NavMenu";

describe("NavMenu", () => {
    it("renderiza los enlaces del menú", () => {
        render(<MemoryRouter><NavMenu /></MemoryRouter>);
        expect(screen.getByText("SHOP")).toBeTruthy();
        expect(screen.getByText("DROPS")).toBeTruthy();
        expect(screen.getByText("ABOUT")).toBeTruthy();
        expect(screen.getByText("LOGIN")).toBeTruthy();
    });

    it("verifica la ruta del enlace SHOP", () => {
        render(<MemoryRouter><NavMenu /></MemoryRouter>);
        expect(screen.getByText("SHOP").getAttribute("href")).toBe("/home");
    });

    it("verifica la ruta del enlace LOGIN", () => {
        render(<MemoryRouter><NavMenu /></MemoryRouter>);
        expect(screen.getByText("LOGIN").getAttribute("href")).toBe("/login");
    });
});