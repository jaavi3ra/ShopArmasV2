
import "../../styles/organism/ProductCard.css";
import { Imagen } from "../atomic/Imagen";
import { StatRow } from "../molecule/StatRow";

export function ProductCard({ product , onAgregarProducto}) {
  return (
    <article
      className="product-card"
      data-category={product.category}
      data-product-id={product.id}
    >
      <span className="product-badge">
        {product.badge}
      </span>

      <button
        className="favorite-btn"
        aria-label={`Agregar ${product.name} a favoritos`}
        title="Favorito"
      >
        ♡
      </button>

      <a
        className="product-image"
        href={`?page=product&id=${product.id}`}
        data-product-id={product.id}
        aria-label={`Ver ${product.name}`}
      >
        <Imagen
          src={product.image}
          alt={product.name}
        />
      </a>

      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>

        <a
          className="product-title-link"
          href={`?page=product&id=${product.id}`}
          data-product-id={product.id}
          aria-label={`Ver ${product.name}`}
        >
          <h3 className="name-product">
            {product.name}
          </h3>
        </a>

        <div className="weapon-stats compact">
          <StatRow
            label="Daño"
            value={product.stats.damage}
          />

          <StatRow
            label="Precisión"
            value={product.stats.accuracy}
          />

          <StatRow
            label="Alcance"
            value={product.stats.range}
          />
        </div>

        <div className="product-footer">
          <div>
            <span className="product-price">
              ${product.price.toLocaleString("es-CL")}
            </span>

            <span className="respect-points">
              +{product.rp} RP
            </span>
          </div>

          <button
            className="btn-agregar-item"
            onClick={() => onAgregarProducto(product)}
            data-id={product.id}
          >
            AGREGAR
          </button>
        </div>
      </div>
    </article>
  );
}