import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthTabs } from '../../components/molecule/AuthTabs';

describe('AuthTabs', () => {

    it('renderiza las dos pestañas', () => {
        render(<AuthTabs activeTab="login" onChange={() => { }} />);

        expect(screen.getByText('LOGIN')).toBeTruthy();
        expect(screen.getByText('REGISTRO')).toBeTruthy();
    });

    it('ejecuta onChange al hacer clic en REGISTRO', () => {
        const onChange = jasmine.createSpy('onChange');

        render(<AuthTabs activeTab="login" onChange={onChange} />);

        fireEvent.click(screen.getByText('REGISTRO'));

        expect(onChange).toHaveBeenCalledWith('register');
    });

    it('ejecuta onChange al hacer clic en LOGIN', () => {
        const onChange = jasmine.createSpy('onChange');

        render(<AuthTabs activeTab="register" onChange={onChange} />);

        fireEvent.click(screen.getByText('LOGIN'));

        expect(onChange).toHaveBeenCalledWith('login');
    });

});