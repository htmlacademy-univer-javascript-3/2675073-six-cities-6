import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './main/MainPage';
import LoginPage from './login/LoginPage';
import FavoritesPage from './favorites/FavoritesPage';
import OfferPage from './offer/OfferPage';
import NotFoundPage from './not-found/NotFoundPage';
import PrivateRoute from './PrivateRoute';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage offersCount={312} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<OfferPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
