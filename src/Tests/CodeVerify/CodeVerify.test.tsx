import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MessageCode } from '../../UI/Atoms/Message';
import VerifyCode from '../../UI/Organisms/VerifyCode';

describe('Code Verify', () => {
    test('VVerify that the code is sent when you submit.', () => {
        const { getByLabelText, getByRole, getByTestId } = render(
            <BrowserRouter>
                <VerifyCode />
            </BrowserRouter>
        );
        const valueCode = getByTestId('verify_code') as HTMLInputElement;
        const submitButton = getByRole('button', {
            name: `${MessageCode.btnLabel.msg}`,
        });

        fireEvent.change(valueCode, { target: { value: '12345' } });
        expect(valueCode.value).not.toBe('');
        fireEvent.submit(submitButton);
    });
});
