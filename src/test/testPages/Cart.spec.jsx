
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Cart } from '../../pages/cart';

describe('Pruebas de la página Cart', () => {
  const productosPrueba = [
    {
      id: 1,
      name: 'Espada de prueba',
      image: '/imagenes/espada.jpg',
      category: 'Espadas',
      price: 15000,
      quantity: 2
    },
    {
      id: 2,
      name: 'Escudo de prueba',
      image: '/imagenes/escudo.jpg',
      category: 'Escudos',
      price: 10000,
      quantity: 1
    }
  ];

  let carrito;
  let setCarrito;

  beforeEach(() => {
    carrito = [...productosPrueba];
    setCarrito = jasmine.createSpy('setCarrito').and.callFake((actualizar) => {
      carrito = actualizar(carrito);
    });
  });

  function renderizarCart() {
    return render(
      <MemoryRouter initialEntries={['/cart']}>
        <Routes>
          <Route
            path="/cart"
            element={<Cart carrito={carrito} setCarrito={setCarrito} />}
          />
          <Route path="/home" element={<h1>Inicio</h1>} />
          <Route path="/checkout" element={<h1>Checkout</h1>} />
        </Routes>
      </MemoryRouter>
    );
  }

  it('debería mostrar el título del carrito y sus productos', () => {
    renderizarCart();

    expect(screen.getByRole('heading', { name: 'TU CARRITO' })).toBeTruthy();
    expect(screen.getByText('Espada de prueba')).toBeTruthy();
    expect(screen.getByText('Escudo de prueba')).toBeTruthy();
  });

  it('debería calcular y mostrar el total del carrito', () => {
  renderizarCart();

  const importes = screen.getAllByText('$40.000');

  expect(importes.length).toBe(2);
});

  it('debería solicitar el aumento de cantidad del producto', () => {
    renderizarCart();

    const botonesSumar = screen.getAllByRole('button', { name: '+' });
    fireEvent.click(botonesSumar[0]);

    expect(setCarrito).toHaveBeenCalled();
    expect(carrito[0].quantity).toBe(3);
  });

  it('debería solicitar la disminución de cantidad del producto', () => {
    renderizarCart();

    const botonesRestar = screen.getAllByRole('button', { name: '-' });
    fireEvent.click(botonesRestar[0]);

    expect(setCarrito).toHaveBeenCalled();
    expect(carrito[0].quantity).toBe(1);
  });

  it('debería navegar a Inicio al continuar comprando', () => {
    renderizarCart();

    fireEvent.click(
      screen.getByRole('button', { name: /SEGUIR COMPRANDO/i })
    );

    expect(screen.getByRole('heading', { name: 'Inicio' })).toBeTruthy();
  });

  it('debería navegar a Checkout al finalizar la compra', () => {
    renderizarCart();

    fireEvent.click(
      screen.getByRole('button', { name: /FINALIZAR COMPRA/i })
    );

    expect(screen.getByRole('heading', { name: 'Checkout' })).toBeTruthy();
  });
});
