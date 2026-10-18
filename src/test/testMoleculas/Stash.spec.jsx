import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { StashInfo } from "../../components/molecule/Stash";

describe("StashInfo", () => {
    it("renderiza el enlace YOUR STASH", () => {
        render(<MemoryRouter><StashInfo quantity={3} /></MemoryRouter>);
        expect(screen.getByText("YOUR STASH")).toBeTruthy();
    });

    it("muestra la cantidad recibida", () => {
        render(<MemoryRouter><StashInfo quantity={3} /></MemoryRouter>);
        expect(screen.getByText("3")).toBeTruthy();
    });

    it("dirige al carrito", () => {
        render(<MemoryRouter><StashInfo quantity={3} /></MemoryRouter>);
        expect(screen.getByText("YOUR STASH").getAttribute("href")).toBe("/cart");
    });
});