import Contact from '../../components/Contact';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Contact components', () => {
    it('render', () => {
        render(<Contact />);
    });

    it('Matches Snapshot', () => {
        const { asFragment } = render(<Contact />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('has text content', () => {
        const { getByTestId } = render(<Contact />);

        expect(getByTestId('contactTag')).toHaveTextContent('Contact Me')
    })
})