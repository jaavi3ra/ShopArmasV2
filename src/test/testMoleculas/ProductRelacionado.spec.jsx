import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductRelacionado } from "../../components/molecule/ProductRelacionado";

describe("ProductRelacionado", () => {
    const product = { id: "desert-eagle", name: "Desert Eagle", image: "/-img/static_wikia_nocookie_net-latest.webp" };

    it("renderiza el nombre del producto", () => {
        render(<MemoryRouter><ProductRelacionado product={product} /></MemoryRouter>);
        expect(screen.getByText("Desert Eagle")).toBeTruthy();
    });

    it("muestra la imagen con su texto alternativo", () => {
        render(<MemoryRouter><ProductRelacionado product={product} /></MemoryRouter>);
        expect(screen.getByAltText("Desert Eagle")).toBeTruthy();
    });

    it("dirige al detalle del producto", () => {
        render(<MemoryRouter><ProductRelacionado product={product} /></MemoryRouter>);
        expect(screen.getByRole("link", { name: /desert eagle/i }).getAttribute("href")).toBe("/product/desert-eagle");
    });
});