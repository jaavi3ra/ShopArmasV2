import React from "react";
import { render } from "@testing-library/react";
import { Divider } from "../../components/atomic/Divider";

describe("Divider", () => {
  it("renderiza un divisor horizontal por defecto", () => {
    const { container } = render(<Divider />);
    const divider = container.firstElementChild;

    expect(divider.classList.contains("divider")).toBe(true);
    expect(divider.classList.contains("divider--horizontal")).toBe(true);
  });

  it("aplica la orientación vertical", () => {
    const { container } = render(<Divider orientation="vertical" />);
    const divider = container.firstElementChild;

    expect(divider.classList.contains("divider--vertical")).toBe(true);
    expect(divider.classList.contains("divider--horizontal")).toBe(false);
  });

  it("agrega una clase personalizada y conserva las clases base", () => {
    const { container } = render(<Divider className="mi-divisor" />);
    const divider = container.firstElementChild;

    expect(divider.classList.contains("mi-divisor")).toBe(true);
    expect(divider.classList.contains("divider")).toBe(true);
    expect(divider.classList.contains("divider--horizontal")).toBe(true);
  });
});