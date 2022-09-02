
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'components/Container/Container';
import { ContactsPage } from 'pages/ContactsPage';
import { AppBar } from 'components/AppBar/AppBar';
// import { HomePage } from 'pages/HomePage';
// import { RegisterPage } from 'pages/RegisterPage';
// import { LoginPage } from 'pages/LoginPage';
import { authOperations } from 'redux/auth/auth-operations';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
