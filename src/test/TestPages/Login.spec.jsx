import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Login } from "../../pages/Login";

describe("Login", () => {
  function renderizarLogin() {
    return render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={<h1>Panel de administración</h1>}
          />
        </Routes>
      </MemoryRouter>
    );
  }

  it("muestra el formulario de inicio de sesión por defecto", () => {
    renderizarLogin();

    expect(
      screen.getByPlaceholderText("usuario@email.com").value
    ).toBe("");

    expect(
      screen.getByPlaceholderText("Tu contraseña").value
    ).toBe("");

    expect(
      screen.getByRole("button", { name: "ENTRAR" })
    ).toBeTruthy();
  });

  it("navega a admin con las credenciales correctas", async () => {
    renderizarLogin();

    fireEvent.change(
      screen.getByPlaceholderText("usuario@email.com"),
      { target: { value: "admin@grovemarket.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Tu contraseña"),
      { target: { value: "grove1234" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "ENTRAR" })
    );

    expect(
      await screen.findByRole("heading", {
        name: "Panel de administración",
      })
    ).toBeTruthy();
  });

  it("muestra una alerta y permanece en login con datos incorrectos", () => {
    const alerta = spyOn(window, "alert");

    renderizarLogin();

    fireEvent.change(
      screen.getByPlaceholderText("usuario@email.com"),
      { target: { value: "otro@gmail.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Tu contraseña"),
      { target: { value: "incorrecta" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: "ENTRAR" })
    );

    expect(alerta).toHaveBeenCalledWith(
      "Correo o contraseña incorrectos."
    );

    expect(
      screen.getByRole("button", { name: "ENTRAR" })
    ).toBeTruthy();

    expect(
      screen.queryByRole("heading", {
        name: "Panel de administración",
      })
    ).toBeNull();
  });
});