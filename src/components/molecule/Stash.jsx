import { Icono } from "../atomic/Icono";
import { Badge } from "../atomic/Contador";

export function StashInfo({ quantity }) {
  return (
    <div className="stash-box">
      <Icono name="cart" />
      <span>YOUR STASH</span>
      <Badge value={quantity} />
    </div>
  );
}