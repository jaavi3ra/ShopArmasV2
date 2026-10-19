import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../../components/organism/header';

describe('Pruebas del organismo Header', () => {
  function renderizarHeader() {
    return render(
      <MemoryRouter>
        <Header cantidadCarrito={3} />
      </MemoryRouter>
    );
  }

  it('debería mostrar el nombre de la tienda', () => {
    renderizarHeader();
    expect(screen.getByText('GROVE MARKET')).toBeTruthy();
  });

  it('debería renderizar el encabezado', () => {
    renderizarHeader();
    expect(screen.getByRole('banner')).toBeTruthy();
  });
});
