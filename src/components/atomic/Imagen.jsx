import React from "react";
import "../../styles/atomic/Imagen.css";

export function Imagen({ src, alt , className}) {
  return <img src={src} alt={alt} className={className} />;
}