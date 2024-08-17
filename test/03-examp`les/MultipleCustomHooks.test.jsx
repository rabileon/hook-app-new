import { fireEvent, render, screen } from '@testing-library/react';
import { Layout } from '../../src/05-useLayoutEffect/Layout';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <Layout/>', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<Layout />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('BreakingBad Quotes'));

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    // console.log(nextButton.disabled);
    expect(nextButton.disabled).toBeTruthy();

    // screen.debug();
  });

  test('debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    });

    render(<Layout />);
    expect(screen.getByText('Hola Mundo')).toBeTruthy();
    expect(screen.getByText('Fernando')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar la funcion de incrementar ', () => {
    useCounter.mockReturnValue({
      counter: 1,
      increment: mockIncrement,
    });

    render(<Layout />);

    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
