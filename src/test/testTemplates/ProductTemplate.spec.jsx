import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProductTemplate } from "../../components/template/ProductTemplate";

describe("ProductTemplate", () => {
    const producto = { id: "desert-eagle", name: "Desert Eagle", category: "Pistola", price: 12500, rp: 150, description: "Arma potente", image: "/-img/static_wikia_nocookie_net-latest.webp", stats: { damage: 75, accuracy: 80, range: 60 } };
    const props = { producto, cantidad: 1, onCantidadChange: () => { }, onAddToCart: jasmine.createSpy("onAddToCart") };

    it("muestra el nombre del producto", () => {
        render(<MemoryRouter><ProductTemplate {...props} /></MemoryRouter>);
        expect(screen.getByRole("heading", { name: "Desert Eagle" })).toBeTruthy();
    });

    it("agrega el producto al carrito", () => {
        render(<MemoryRouter><ProductTemplate {...props} /></MemoryRouter>);
        fireEvent.click(screen.getByText("Agregar al carrito"));
        expect(props.onAddToCart).toHaveBeenCalledWith(producto);
    });

    it("muestra la estadística de daño", () => {
        render(<MemoryRouter><ProductTemplate {...props} /></MemoryRouter>);
        expect(screen.getByText("Daño")).toBeTruthy();
    });
});