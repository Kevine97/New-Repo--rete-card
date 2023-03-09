import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../../pages/Home/Home';

describe('Home', () => {
    it('Home', () => {
        //ARRAGE
        render(<Home />);
        //ACT

        //EXPECT
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Home');
    });
});
