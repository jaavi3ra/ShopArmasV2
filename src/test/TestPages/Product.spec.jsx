import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Product } from "../../pages/Product";

describe("Product", () => {
    it("renderiza el producto según su ID", () => {
        render(<MemoryRouter initialEntries={["/product/desert-eagle"]}><Routes><Route path="/product/:id" element={<Product agregarAlCarrito={() => { }} />} /></Routes></MemoryRouter>);
        expect(screen.getByRole("heading", { name: "Desert Eagle" })).toBeTruthy();
    });

    it("muestra las estadísticas del producto", () => {
        render(<MemoryRouter initialEntries={["/product/desert-eagle"]}><Routes><Route path="/product/:id" element={<Product agregarAlCarrito={() => { }} />} /></Routes></MemoryRouter>);
        expect(screen.getByText("Daño")).toBeTruthy();
    });

    it("muestra el botón para agregar al carrito", () => {
        render(<MemoryRouter initialEntries={["/product/desert-eagle"]}><Routes><Route path="/product/:id" element={<Product agregarAlCarrito={() => { }} />} /></Routes></MemoryRouter>);
        expect(screen.getByText("Agregar al carrito")).toBeTruthy();
    });
});