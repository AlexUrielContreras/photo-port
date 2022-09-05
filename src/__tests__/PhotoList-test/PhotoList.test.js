import PhotoList from '../../components/PhotoList';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

describe('Photo List componenet', () => {
    it('renders', () => {
        render(<PhotoList />)
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />);

        expect(asFragment()).toMatchSnapshot()
    })
})

