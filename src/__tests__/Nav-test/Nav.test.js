import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../../components/Nav';

afterEach(cleanup);

describe('Nav component', () => {
    it('render', () => {
        render(<Nav />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visable', () => {
    it('insets emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
        
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
});

describe('links are visable', () => {
    it('insert text into the links', () => {
        const { getByTestId } = render(<Nav />);

        expect(getByTestId('link')).toHaveTextContent('📸 Oh Snaps!');
        expect(getByTestId('about')).toHaveTextContent('About me');

    })
})