import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '../../components/Gallery';

const portrait = { name: 'portrait', description: 'Portrait of people in my life'};

afterEach(cleanup);

describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />)
    });

    it('atches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />)

        expect(asFragment()).toMatchSnapshot()
    });

    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />);

        expect(getByTestId('h1tag')).toHaveTextContent('Portrait')
    })
})