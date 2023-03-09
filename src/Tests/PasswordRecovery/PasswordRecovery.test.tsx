import { render, fireEvent } from '@testing-library/react';
import RecoveryPassword from '../../UI/Organisms/RecoveryPassword';
import { BrowserRouter } from 'react-router-dom';
import { MessageRecoveryPassword } from '../../UI/Atoms/Message';

describe('Password Recovery', () => {
    test('Verify that the username or email is sent', () => {
        const { getByRole, getByTestId } = render(
            <BrowserRouter>
                <RecoveryPassword />
            </BrowserRouter>
        );
        const valueUsername = getByTestId('username') as HTMLInputElement;
        const submitButton = getByRole('button', {
            name: `${MessageRecoveryPassword.btnLabel.msg}`,
        });

        fireEvent.change(valueUsername, { target: { value: 'example' } });
        expect(valueUsername.value).not.toBe('');
        fireEvent.submit(submitButton);
    });
});
