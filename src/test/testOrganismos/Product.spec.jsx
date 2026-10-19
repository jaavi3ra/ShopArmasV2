import React from 'react';
import { render, screen } from '@testing-library/react';
import { Product } from '../../components/organism/Product';

describe('Pruebas del organismo Product', () => {
  const productoPrueba = {
    name: 'Espada de prueba',
    image: '/imagenes/espada.jpg',
    precio: '$15.000',
    rp: 'RP',
    description: 'Descripción del producto de prueba'
  };

  function renderizarProduct(productData = productoPrueba) {
    return render(<Product productData={productData} />);
  }

  it('debería mostrar el nombre del producto', () => {
    renderizarProduct();

    expect(
      screen.getByRole('heading', { name: 'Espada de prueba' })
    ).toBeTruthy();
  });

  it('debería mostrar el precio del producto', () => {
    renderizarProduct();

    expect(screen.getByText('$15.000')).toBeTruthy();
  });

  it('debería mostrar la descripción del producto', () => {
    renderizarProduct();

    expect(
      screen.getByText('Descripción del producto de prueba')
    ).toBeTruthy();
  });

  it('debería mostrar los botones de compra', () => {
    renderizarProduct();

    expect(
      screen.getByRole('button', { name: 'Agregar al carrito' })
    ).toBeTruthy();

    expect(
      screen.getByRole('button', { name: 'Comprar ahora' })
    ).toBeTruthy();
  });
});
