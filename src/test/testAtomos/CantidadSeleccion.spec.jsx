import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CantidadSeleccion } from "../../components/atomic/CantidadSeleccion";

describe("CantidadSeleccion", () => {
  it("renderiza el selector con su etiqueta", () => {
    render(
      <CantidadSeleccion
        id="cantidad"
        value="1"
        onChange={() => {}}
      />
    );

    const select = screen.getByRole("combobox", { name: "Cantidad" });

    expect(select.id).toBe("cantidad");
  });

  it("muestra las cinco opciones", () => {
    render(
      <CantidadSeleccion
        id="cantidad"
        value="1"
        onChange={() => {}}
      />
    );

    const opciones = screen.getAllByRole("option");

    expect(opciones.map((opcion) => opcion.value))
      .toEqual(["1", "2", "3", "4", "5"]);
  });

  it("muestra el valor recibido por props", () => {
    render(
      <CantidadSeleccion
        id="cantidad"
        value="3"
        onChange={() => {}}
      />
    );

    expect(screen.getByRole("combobox").value).toBe("3");
  });

  it("ejecuta onChange con la cantidad seleccionada", () => {
    const onChange = jasmine.createSpy("onChange");
    let cantidadSeleccionada;

    onChange.and.callFake((event) => {
      cantidadSeleccionada = event.target.value;
    });

    render(
      <CantidadSeleccion
        id="cantidad"
        value="1"
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "4" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(cantidadSeleccionada).toBe("4");
  });
});