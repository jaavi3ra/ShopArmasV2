import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "../../components/atomic/Input";

describe("Input", () => {
  it("usa el tipo text por defecto", () => {
    render(<Input placeholder="Nombre" />);

    expect(screen.getByRole("textbox").type).toBe("text");
  });

  it("aplica el tipo recibido por props", () => {
    render(<Input type="password" placeholder="Contraseña" />);

    expect(screen.getByPlaceholderText("Contraseña").type)
      .toBe("password");
  });

  it("muestra el placeholder y el valor recibidos", () => {
    render(
      <Input
        placeholder="Tu nombre"
        value="Ignacio"
        onChange={() => {}}
      />
    );

    expect(screen.getByPlaceholderText("Tu nombre").value)
      .toBe("Ignacio");
  });

  it("aplica la clase recibida por props", () => {
    render(<Input className="input-formulario" />);

    expect(
      screen.getByRole("textbox").classList.contains("input-formulario")
    ).toBe(true);
  });

  it("ejecuta onChange con el texto ingresado", () => {
    const onChange = jasmine.createSpy("onChange");
    let textoIngresado;

    onChange.and.callFake((event) => {
      textoIngresado = event.target.value;
    });

    render(<Input value="" onChange={onChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Hola" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(textoIngresado).toBe("Hola");
  });
});