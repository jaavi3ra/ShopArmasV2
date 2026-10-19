
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../components/organism/footer';

describe('Pruebas del organismo Footer', () => {
  it('debería renderizar el elemento footer', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeTruthy();
  });

  it('debería renderizar el contenido del componente FooterInfo', () => {
    const { container } = render(<Footer />);

    expect(container.querySelector('footer').children.length).toBeGreaterThan(0);
  });
});
