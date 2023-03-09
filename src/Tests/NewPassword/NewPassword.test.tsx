import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewPassword from '../../UI/Organisms/NewPassword';
import { MessageSetPassword } from '../../UI/Atoms/Message';

describe('New Password', () => {
    test('Verify that the passwords are being sent', () => {
        const { getByLabelText, getByRole, getByTestId } = render(
            <BrowserRouter>
                <NewPassword />
            </BrowserRouter>
        );

        const valueNewPass = getByTestId('password') as HTMLInputElement;
        const valueConfirmpass = getByTestId('confirmPassword') as HTMLInputElement;
        const submitButton = getByRole('button', {
            name: `${MessageSetPassword.btnLabel.msg}`,
        });

        fireEvent.change(valueNewPass, { target: { value: 'password123' } });
        fireEvent.change(valueConfirmpass, {
            target: { value: 'password123' },
        });

        expect(valueNewPass.value).toEqual(valueConfirmpass.value);
        expect(valueNewPass.value).not.toBe('');
        expect(valueConfirmpass.value).not.toBe('');
        fireEvent.submit(submitButton);
    });
});
