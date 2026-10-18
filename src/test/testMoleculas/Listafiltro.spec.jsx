import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Listafiltro } from "../../components/molecule/Listafiltro";

describe("Listafiltro", () => {
    it("renderiza las categorías", () => {
        render(<Listafiltro activeFilter="Todos" onFilterChange={() => { }} />);
        expect(screen.getByText("Pistolas")).toBeTruthy();
        expect(screen.getByText("Rifles")).toBeTruthy();
        expect(screen.getByText("Escopetas")).toBeTruthy();
    });

    it("marca el filtro activo", () => {
        render(<Listafiltro activeFilter="Pistola" onFilterChange={() => { }} />);
        expect(screen.getByText("Pistolas")).toBeTruthy();
    });

    it("ejecuta onFilterChange al hacer clic en una categoría", () => {
        const onFilterChange = jasmine.createSpy("onFilterChange");
        render(<Listafiltro activeFilter="Todos" onFilterChange={onFilterChange} />);
        fireEvent.click(screen.getByText("Pistolas"));
        expect(onFilterChange).toHaveBeenCalledWith("Pistola");
    });
});