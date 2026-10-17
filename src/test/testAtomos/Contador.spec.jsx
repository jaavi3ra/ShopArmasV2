import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "../../components/atomic/Contador";

describe("Badge", () => {
  it("muestra el valor recibido por props", () => {
    render(<Badge value={5} />);

    expect(screen.getByText("5")).toBeTruthy();
  });

  it("aplica la clase badge", () => {
    render(<Badge value={3} />);

    const badge = screen.getByText("3");

    expect(badge.classList.contains("badge")).toBe(true);
  });

  it("muestra correctamente el valor cero", () => {
    render(<Badge value={0} />);

    expect(screen.getByText("0")).toBeTruthy();
  });

  it("actualiza el contenido cuando cambia value", () => {
    const { rerender } = render(<Badge value={2} />);

    rerender(<Badge value={8} />);

    expect(screen.getByText("8")).toBeTruthy();
    expect(screen.queryByText("2")).toBeNull();
  });
});