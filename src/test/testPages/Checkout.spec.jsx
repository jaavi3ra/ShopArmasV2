
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Checkout } from '../../pages/checkout';

describe('Pruebas de la página Checkout', () => {
  const productosPrueba = [
    {
      id: 1,
      name: 'Espada de prueba',
      image: '/imagenes/espada.jpg',
      category: 'Espadas',
      price: 15000,
      quantity: 2
    }
  ];

  let setCarrito;

  function renderizarCheckout(carrito = productosPrueba) {
    return render(
      <MemoryRouter initialEntries={['/checkout']}>
        <Checkout
          carrito={carrito}
          setCarrito={setCarrito}
        />
      </MemoryRouter>
    );
  }

  beforeEach(() => {
    setCarrito = jasmine.createSpy('setCarrito');
    spyOn(window, 'alert');
  });

  it('debería mostrar el título y los campos principales', () => {
    renderizarCheckout();

    expect(
      screen.getByRole('heading', { name: 'FINALIZAR COMPRA' })
    ).toBeTruthy();

    expect(screen.getByPlaceholderText('Ingrese su nombre')).toBeTruthy();
    expect(screen.getByPlaceholderText('Ingrese su correo')).toBeTruthy();
    expect(screen.getByPlaceholderText('Ingrese su teléfono')).toBeTruthy();
  });

  
    it('debería mostrar los productos y el total del pedido', () => {
    renderizarCheckout();

    expect(screen.getByText('Espada de prueba x2')).toBeTruthy();
    expect(screen.getAllByText('$30.000').length).toBe(3);
    });


  it('debería mostrar dirección y comuna cuando se selecciona despacho', () => {
    renderizarCheckout();

    expect(
      screen.getByPlaceholderText('Ingrese su dirección')
    ).toBeTruthy();

    expect(
      screen.getByPlaceholderText('Ingrese su comuna')
    ).toBeTruthy();
  });

  it('debería ocultar dirección y comuna al seleccionar retiro en tienda', () => {
    renderizarCheckout();

    fireEvent.click(screen.getByLabelText('Retiro en tienda'));

    expect(
      screen.queryByPlaceholderText('Ingrese su dirección')
    ).toBeNull();

    expect(
      screen.queryByPlaceholderText('Ingrese su comuna')
    ).toBeNull();
  });

  it('debería impedir confirmar si falta el nombre', () => {
    renderizarCheckout();

    fireEvent.click(
      screen.getByRole('button', { name: 'CONFIRMAR COMPRA' })
    );

    expect(window.alert).toHaveBeenCalledWith('Debe ingresar su nombre.');
    expect(setCarrito).not.toHaveBeenCalled();
  });

  it('debería validar el formato del correo electrónico', () => {
    renderizarCheckout();

    fireEvent.change(screen.getByPlaceholderText('Ingrese su nombre'), {
      target: { value: 'Gonzalo Reyes' }
    });

    fireEvent.change(screen.getByPlaceholderText('Ingrese su correo'), {
      target: { value: 'correo-invalido' }
    });

    const formulario = document.getElementById('datos-compra');
    formulario.noValidate = true;

    fireEvent.click(
      screen.getByRole('button', { name: 'CONFIRMAR COMPRA' })
    );

    expect(window.alert).toHaveBeenCalledWith(
      'Debe ingresar un correo válido. Ejemplo: usuario@dominio.cl'
    );

    expect(setCarrito).not.toHaveBeenCalled();
  });

  it('debería confirmar una compra válida y vaciar el carrito', () => {
    renderizarCheckout();

    fireEvent.change(screen.getByPlaceholderText('Ingrese su nombre'), {
      target: { value: 'Gonzalo Reyes' }
    });

    fireEvent.change(screen.getByPlaceholderText('Ingrese su correo'), {
      target: { value: 'gonzalo@example.cl' }
    });

    fireEvent.change(screen.getByPlaceholderText('Ingrese su teléfono'), {
      target: { value: '+56912345678' }
    });

    fireEvent.change(screen.getByPlaceholderText('Ingrese su dirección'), {
      target: { value: 'Av. Principal 123' }
    });

    fireEvent.change(screen.getByPlaceholderText('Ingrese su comuna'), {
      target: { value: 'Maipú' }
    });

    fireEvent.click(
      screen.getByRole('button', { name: 'CONFIRMAR COMPRA' })
    );

    expect(window.alert).toHaveBeenCalledWith(
      '¡Pedido confirmado correctamente! Gracias por tu compra.'
    );

    expect(setCarrito).toHaveBeenCalledWith([]);
  });
});
