
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductCard } from '../../components/organism/CardProducto';

describe('Pruebas del organismo ProductCard', () => {
  const productoPrueba = {
    id: 1,
    name: 'Espada de prueba',
    image: '/imagenes/espada.jpg',
    category: 'Espadas',
    badge: 'Popular',
    price: 15000,
    rp: 100,
    stats: {
      damage: 80,
      accuracy: 90,
      range: 70
    }
  };

  const onAgregarProducto = jasmine.createSpy('onAgregarProducto');

  function renderizarProductCard() {
    return render(
      <MemoryRouter>
        <ProductCard
          product={productoPrueba}
          onAgregarProducto={onAgregarProducto}
        />
      </MemoryRouter>
    );
  }

  beforeEach(() => {
    onAgregarProducto.calls.reset();
  });

  it('debería mostrar el nombre del producto', () => {
    renderizarProductCard();

    expect(screen.getByRole('heading', {
      name: 'Espada de prueba'
    })).toBeTruthy();
  });

  it('debería mostrar la categoría y la insignia', () => {
    renderizarProductCard();

    expect(screen.getByText('Espadas')).toBeTruthy();
    expect(screen.getByText('Popular')).toBeTruthy();
  });

  it('debería mostrar el precio y los puntos RP', () => {
    renderizarProductCard();

    expect(screen.getByText('$15.000')).toBeTruthy();
    expect(screen.getByText('+100 RP')).toBeTruthy();
  });

  it('debería mostrar el enlace para ver el producto', () => {
    renderizarProductCard();

    const enlaces = screen.getAllByRole('link', {
      name: 'Ver Espada de prueba'
    });

    expect(enlaces.length).toBe(2);
    expect(enlaces[0].getAttribute('href')).toBe('/product/1');
  });

  it('debería agregar el producto al hacer clic en AGREGAR', () => {
    renderizarProductCard();

    fireEvent.click(screen.getByRole('button', {
      name: 'AGREGAR'
    }));

    expect(onAgregarProducto).toHaveBeenCalledWith(productoPrueba);
  });

  it('debería mostrar el botón de favoritos accesible', () => {
    renderizarProductCard();

    expect(screen.getByRole('button', {
      name: 'Agregar Espada de prueba a favoritos'
    })).toBeTruthy();
  });
});
