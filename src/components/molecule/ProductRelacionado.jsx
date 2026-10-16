import { Link } from 'react-router-dom';
import { Imagen } from '../atomic/Imagen';
import '../../styles/molecule/ProductRelacionado.css';

export function ProductRelacionado({ product }) {
    const { id, name, image } = product;

    return (
        <Link to={`/product/${id}`} className="producto-relacionado-card">
            <div className="producto-relacionado-img-wrap">
                <Imagen src={image} alt={name} className="producto-relacionado-img" />
            </div>
            <h3 className="producto-relacionado-nombre">{name}</h3>
        </Link>
    );
}
