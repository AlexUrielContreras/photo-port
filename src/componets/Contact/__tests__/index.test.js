import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)

describe('Contact is rendering', () => {
    it('render', () => {
        render(<Contact />)
    });

    it('render', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('contact')).toHaveTextContent('Contact Me')
    })

    it('render', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('sub-btn')).toHaveTextContent('Submit')
    })
})

