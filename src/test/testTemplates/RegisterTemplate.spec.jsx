import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RegisterTemplate } from "../../components/template/RegisterTemplate";

describe("RegisterTemplate", () => {
  function crearProps() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      onNameChange: jasmine.createSpy("onNameChange"),
      onEmailChange: jasmine.createSpy("onEmailChange"),
      onPasswordChange: jasmine.createSpy("onPasswordChange"),
      onConfirmPasswordChange: jasmine.createSpy(
        "onConfirmPasswordChange"
      ),
      onSubmit: jasmine.createSpy("onSubmit").and.callFake((event) => {
        event.preventDefault();
      }),
      onTabChange: jasmine.createSpy("onTabChange"),
    };
  }

  it("ejecuta las acciones al cambiar los campos", () => {
    const props = crearProps();

    render(<RegisterTemplate {...props} />);

    fireEvent.change(screen.getByPlaceholderText("Carl Johnson"), {
      target: { value: "Ignacio" },
    });

    fireEvent.change(screen.getByPlaceholderText("usuario@email.com"), {
      target: { value: "ignacio@gmail.com" },
    });

    fireEvent.change(screen.getByPlaceholderText("Mínimo 8 caracteres"), {
      target: { value: "Clave1234" },
    });

    fireEvent.change(screen.getByPlaceholderText("Repite tu contraseña"), {
      target: { value: "Clave1234" },
    });

    expect(props.onNameChange).toHaveBeenCalledTimes(1);
    expect(props.onEmailChange).toHaveBeenCalledTimes(1);
    expect(props.onPasswordChange).toHaveBeenCalledTimes(1);
    expect(props.onConfirmPasswordChange).toHaveBeenCalledTimes(1);
  });

  it("ejecuta onSubmit al presionar CREAR CUENTA", () => {
    const props = crearProps();

    render(<RegisterTemplate {...props} />);

    fireEvent.click(
      screen.getByRole("button", { name: "CREAR CUENTA" })
    );

    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });

  it("muestra el mensaje recibido por props", () => {
    const props = crearProps();

    render(
      <RegisterTemplate
        {...props}
        message="El correo ya está registrado"
      />
    );

    expect(
      screen.getByText("El correo ya está registrado")
    ).toBeTruthy();
  });
});