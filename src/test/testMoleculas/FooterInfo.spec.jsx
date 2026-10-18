import React from 'react';
import { render, screen } from '@testing-library/react';
import { FooterInfo } from '../../components/molecule/FooterInfo';

describe('FooterInfo', () => {
    it('renderiza el texto de la tienda', () => {
        render(<FooterInfo />);

        expect(
            screen.getByText('Tienda de Armas Grand Theft Auto')
        ).toBeTruthy();
    });

    it('renderiza el componente FooterInfo', () => {
        const { container } = render(<FooterInfo />);

        expect(container.firstChild).toBeTruthy();
    });

    it('muestra el texto dentro de una etiqueta span', () => {
        const { container } = render(<FooterInfo />);

        expect(container.querySelector('span')).toBeTruthy();
    });

});