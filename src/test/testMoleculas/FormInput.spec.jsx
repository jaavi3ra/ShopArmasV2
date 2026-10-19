import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormInput } from '../../components/molecule/FormInput';

describe('FormInput', () => {

    it('renderiza la etiqueta del campo', () => {
        render(<FormInput label="Correo electrónico" id="correo" value="" onChange={() => { }} />);
        expect(screen.getByText('Correo electrónico')).toBeTruthy();
    });

    it('permite escribir en el input', () => {
        const onChange = jasmine.createSpy('onChange');

        render(<FormInput label="Nombre" id="nombre" placeholder="Ingresa tu nombre" value="" onChange={onChange} />);

        fireEvent.change(screen.getByPlaceholderText('Ingresa tu nombre'), {
            target: { value: 'Andrés' }
        });

        expect(onChange).toHaveBeenCalled();
    });
});
