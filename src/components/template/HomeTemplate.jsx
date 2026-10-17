import React from "react";
import { Listafiltro } from "../molecule/Listafiltro";
import { EyebrowText } from "../atomic/Etiqueta";
import { MensajeSpan } from "../molecule/mensajeSpan";



export function HomeTemplate({   children, 
  stock = 0,
  nombreProducto,
  activeFilter,
  onFilterChange}) {
  console.log("TEMPLATE RECIBE:", nombreProducto);
  return (
    <>  
   {nombreProducto && (
        <div className="span-container">
          <MensajeSpan
            texto={nombreProducto}
            className="mensaje-alerta" />
        </div>
      )}

    <div className="home-template">

      
      <aside className="filter-section">
        <EyebrowText>FILTROS</EyebrowText>
        <Listafiltro
          activeFilter={activeFilter}
          onFilterChange={onFilterChange} />
      </aside>

      <main className="catalog-section">

        <div className="catalog-header">
          <div>
            <EyebrowText>CATÁLOGO</EyebrowText>
            <h2>Productos disponibles</h2>
          </div>

          <span className="stock-note">
            {stock} artículos en stock
          </span>
        </div>

        <div className="product-grid">
           {stock === 0 ? (
          <p role="status">No hay productos disponibles</p>
            ) : ( children )}
        </div>

      </main>

    </div>
    </>
  );
}