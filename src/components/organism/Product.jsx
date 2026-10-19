import React from "react";
import { CantidadSeleccion } from "../atomic/CantidadSeleccion";
import { Imagen } from "../atomic/Imagen";
import { Boton } from "../atomic/Boton";

export function Product({ productData = {} }) {
    console.log("Datos recibidos en Product:", productData);
    return (
        <main className="detalle-producto">

            <nav className="breadcrumb" aria-label="breadcrumbs">
                <span id="breadcrumbProducto">{productData?.name}</span>
            </nav>

            <section className="producto">
                <div className="producto-imagenes">
                    <Imagen id="imagenProducto" src={productData?.image} alt={productData?.name} />
                </div>

                <div className="producto-info">
                    <div className="producto-titulo">
                        <h1 id="nombreProducto">{productData?.name}</h1>
                        <div className="producto-precio">
                            <h2 id="precioProducto">{productData?.precio}</h2>
                            <span id="rpProducto">{productData?.rp}</span>
                        </div>
                    </div>

                    <p id="descripcionProducto">{productData?.description}</p>

                    <CantidadSeleccion />

                    <div className="acciones-producto">
                        <Boton>Agregar al carrito</Boton>
                        <Boton>Comprar ahora</Boton>
                    </div>
                </div>
            </section>

        </main>
    );
}