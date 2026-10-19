import React from "react";
import { render, screen } from '@testing-library/react';
import { BalanceInfo } from '../../components/molecule/BalanceInfo';

describe('BalanceInfo', () => {

    it("renderiza el texto SALDO", () => {
        render(<BalanceInfo balance={150000} />);

        expect(screen.getByText("SALDO")).toBeTruthy();
    })

    it('muestra el saldo recibido por props', () => {
        render(<BalanceInfo balance={15000} />);

        expect(screen.getByText('$15000')).toBeTruthy();
    });

    it('actualiza el saldo según el valor recibido', () => {
        render(<BalanceInfo balance={25000} />);

        expect(screen.getByText('$25000')).toBeTruthy();
    });

});