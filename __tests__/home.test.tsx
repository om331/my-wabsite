import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
    it('renders welcome message', () => {
        render(<Home />);
        expect(screen.getByText('Welcome to Next.js')).toBeInTheDocument();
    });

    it('handles button click', () => {
        render(<Home />);
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();
        
        fireEvent.click(screen.getByText('Click Me'));
        expect(alertMock).toHaveBeenCalledWith('Hello!');
        
        alertMock.mockRestore();
    });
});