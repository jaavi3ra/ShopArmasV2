import React from "react";
import { FiltroLink } from "../atomic/Boton";
import "../../styles/molecule/Listafiltro.css";

export function Listafiltro({ activeFilter, onFilterChange }) {
      const categorias = [
    { text: "Todos", value: "Todos" },
    { text: "Pistolas", value: "Pistola" },
    { text: "Subfusil", value: "Subfusil" },
    { text: "Rifles", value: "Rifle" },
    { text: "Escopetas", value: "Escopeta" },
    { text: "Cuerpo a cuerpo", value: "Cuerpo a cuerpo" },
    { text: "Municion", value: "Municion" },
  ];
    return (
       <div className="filtros">
        <ul>
      {categorias.map((categoria) => (
        <li key={categoria.value}>
          <FiltroLink
            text={categoria.text}
            value={categoria.value}
            active={activeFilter === categoria.value}
            onClick={onFilterChange}
          />
        </li>
      ))}
    </ul> 
    </div> 
    );
}