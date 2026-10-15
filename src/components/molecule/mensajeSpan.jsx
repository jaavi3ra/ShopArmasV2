import { Texto } from "../atomic/Texto";
import "../../styles/molecule/MensajeSpan.css";

export function MensajeSpan({ texto, className }) {
  return (
    <Texto variant="span" className={className}>
      Agregaste {texto} al carrito!
    </Texto>
  );
}