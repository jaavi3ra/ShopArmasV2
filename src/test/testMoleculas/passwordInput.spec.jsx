import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PasswordInput } from "../../components/molecule/passwordInput";

describe("PasswordInput", () => {
    it("renderiza la etiqueta y el campo de contraseña", () => {
        render(<PasswordInput label="Contraseña" id="password" placeholder="Ingresa contraseña" value="" onChange={() => { }} />);
        expect(screen.getByText("Contraseña")).toBeTruthy();
        expect(screen.getByPlaceholderText("Ingresa contraseña")).toBeTruthy();
    });

    it("permite mostrar y ocultar la contraseña", () => {
        render(<PasswordInput label="Contraseña" id="password" placeholder="Ingresa tu contraseña" value="123456" onChange={() => { }} />);
        const input = screen.getByPlaceholderText("Ingresa tu contraseña");
        expect(input.type).toBe("password");
        fireEvent.click(screen.getByRole("button"));
        expect(input.type).toBe("text");
    });

    it("muestra el mensaje de error cuando existe", () => {
        render(<PasswordInput label="Contraseña" id="password" value="" onChange={() => { }} error="La contraseña es obligatoria" />);
        expect(screen.getByText("La contraseña es obligatoria")).toBeTruthy();
    });
});