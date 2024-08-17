import { MemoryRouter } from 'react-router-dom';
import { MainApp } from '../../09-useContext/MainApp';
import { render, screen } from '@testing-library/react';

describe('Pruebas en <MainApp />', () => {
  test('debe de mostrar el HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp></MainApp>
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test('debe de mostrar el HomePage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp></MainApp>
      </MemoryRouter>
    );

    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
});
