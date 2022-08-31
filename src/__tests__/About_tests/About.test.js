import React from 'react';
import About from '../../components/About';

// render - will render componets - jest creates a simulated DOM
// cleanup - remove componets from the Dom to prevent memory leaking and data collisions between tests 
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);

describe('About component', () => {
    it('render', () => {
        render(<About />)
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})
