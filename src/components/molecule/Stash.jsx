import React from "react";
import { Icono } from "../atomic/Icono";
import { Badge } from "../atomic/Contador";
import { NavLink } from "../atomic/Link";

export function StashInfo({ quantity }) {
  return (
    <div className="stash-box">
      <Icono name="cart" />
      <NavLink text="YOUR STASH" to="/cart" />
      <Badge value={quantity} />
    </div>
  );
}