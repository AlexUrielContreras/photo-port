import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../../components/Nav';

const categories = [
    { name:'portraits', description: 'Portraits of people in my life'}
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('render', () => {
        render(<Nav 
                    categories={categories}
                    setCurrentCategory={mockSetCurrentCategory}
                    currentCategory={mockCurrentCategory}
                    contactSelected={mockContactSelected}
                    setContactSelected={mockSetContactSelected}
                />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visable', () => {
    it('insets emoji into the h2', () => {
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
});

describe('links are visable', () => {
    it('insert text into the links', () => {
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

        expect(getByTestId('link')).toHaveTextContent('📸 Oh Snaps!');
        expect(getByTestId('about')).toHaveTextContent('About me');

    })
})