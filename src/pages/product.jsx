import { ProductTemplate } from "../components/template/ProducTemplate";

export  function Product() {
  return (
    <div className="product-page">
  

      <main className="product-content">
        <h1>Producto</h1>

        <ProductTemplate />
      </main>

  
    </div>
  );
}