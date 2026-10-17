import React from 'react';
import { render, screen , cleanup} from '@testing-library/react';
import {Boton} from '../../components/atomic/Boton';

describe("Boton", () => {
  afterEach(() => {
    cleanup();
  });

  it("renderiza el botón correctamente", () => {
    render(<Boton>Haz click</Boton>);

    const button = screen.getByRole("button", { name: "Haz click" });

    expect(button).toBeTruthy();
  });

  it("aplica la clase recibida por props", () => {
    render(<Boton className="btn-primary">Haz click</Boton>);

    const button = screen.getByRole("button", { name: "Haz click" });

    expect(button.classList.contains("btn-primary")).toBe(true);
  });

  it("ejecuta onClick al hacer clic", () => {
    const onClick = jasmine.createSpy("onClick");

    render(<Boton onClick={onClick}>Haz click</Boton>);

    screen.getByRole("button", { name: "Haz click" }).click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});