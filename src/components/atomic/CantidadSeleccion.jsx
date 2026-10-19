import React from "react";
import '../../styles/atomic/CantidadSeleccion.css';
export const CantidadSeleccion = ({ id, value, onChange }) => {
    return (
        <div className="cantidad-seleccion">
            <label htmlFor={id}>Cantidad</label>
            <select id={id} value={value} onChange={onChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    );
};