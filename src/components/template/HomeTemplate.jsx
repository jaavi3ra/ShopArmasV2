import { Listafiltro } from "../molecule/Listafiltro";
import { EyebrowText } from "../atomic/Etiqueta";

export function HomeTemplate({ children, stock = 0 }) {
  return (
    <div className="home-template">

      <aside className="filter-section">
        <EyebrowText>FILTROS</EyebrowText>
        <Listafiltro />
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
          {children}
        </div>

      </main>

    </div>
  );
}