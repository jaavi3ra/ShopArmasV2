import { Header } from '../organism/header';
import { Product } from '../organism/Product';
import { Footer } from '../organism/footer';
import imagenPistola from '../../assets/Pistol-GTASA.webp';

export const ProducTemplate = () => {
    const productoEjemplo = {
        name: "Espada de Prueba",
        precio: "$1,500",
        rp: "300 RP",
        description: "Descripción de prueba",
        image: imagenPistola
    };

    console.log("Objeto en Template:", productoEjemplo);

    return (
        <div className="product-page-template">
            <Header />
            <main>
                {/* ¡Ojo aquí! Debes pasarle la prop productData */}
                <Product productData={productoEjemplo} />
            </main>
            <Footer />
        </div>
    );
};