import React, { useLayoutEffect, useRef } from "react";
import "../../styles/organism/header.css";
import { BalanceInfo } from "../molecule/BalanceInfo";
import { Divider } from "../atomic/Divider";
import { StashInfo } from "../molecule/Stash";
import { NavMenu } from "../molecule/NavMenu";

export function Header({ cantidadCarrito }) {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const actualizarAltura = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.getBoundingClientRect().height}px`
      );
    };

    actualizarAltura();

    const observer = new ResizeObserver(actualizarAltura);
    observer.observe(header);

    return () => {
      observer.disconnect();
      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);

  return (
    <>
      <header ref={headerRef}>
        <section className="header-logo">
          GROVE MARKET
        </section>

        <NavMenu />

        <section className="header-actions">
          <BalanceInfo balance="100.000" />
          <Divider orientation="vertical" />
          <StashInfo quantity={cantidadCarrito} />
        </section>
      </header>

      <div className="header-spacer" aria-hidden="true" />
    </>
  );
}