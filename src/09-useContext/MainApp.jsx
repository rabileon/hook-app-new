import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='about' element={<AboutPage />}></Route>
        <Route path='login' element={<LoginPage />}></Route>

        <Route path='/*' element={<Navigate to='/about' />}></Route>
      </Routes>
    </UserProvider>
  );
};
