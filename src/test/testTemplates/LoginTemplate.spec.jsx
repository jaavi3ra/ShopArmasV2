import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { LoginTemplate } from "../../components/template/LoginTemplate";

describe("LoginTemplate", () => {
  function crearProps() {
    return {
      email: "",
      password: "",
      onEmailChange: jasmine.createSpy("onEmailChange"),
      onPasswordChange: jasmine.createSpy("onPasswordChange"),
      onSubmit: jasmine.createSpy("onSubmit").and.callFake((event) => {
        event.preventDefault();
      }),
      onTabChange: jasmine.createSpy("onTabChange"),
    };
  }

  it("ejecuta las acciones al cambiar correo y contraseña", () => {
    const props = crearProps();

    render(<LoginTemplate {...props} />);

    fireEvent.change(
      screen.getByPlaceholderText("usuario@email.com"),
      { target: { value: "usuario@gmail.com" } }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Tu contraseña"),
      { target: { value: "Clave123" } }
    );

    expect(props.onEmailChange).toHaveBeenCalledTimes(1);
    expect(props.onPasswordChange).toHaveBeenCalledTimes(1);
  });

  it("ejecuta onSubmit al presionar ENTRAR", () => {
    const props = crearProps();

    render(<LoginTemplate {...props} />);

    fireEvent.click(
      screen.getByRole("button", { name: "ENTRAR" })
    );

    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });

  it("muestra el mensaje recibido por props", () => {
    const props = crearProps();

    render(
      <LoginTemplate
        {...props}
        message="Correo o contraseña incorrectos"
      />
    );

    expect(
      screen.getByText("Correo o contraseña incorrectos")
    ).toBeTruthy();
  });
});