// src/components/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Offer } from '../mocks/offers';
import MainPage from './main/MainPage';
import LoginPage from './login/LoginPage';
import FavoritesPage from './favorites/FavoritesPage';
import OfferPage from './offer/OfferPage';
import NotFoundPage from './not-found/NotFoundPage';
import PrivateRoute from './PrivateRoute';

interface AppProps {
  initialOffers: Offer[];
}

const App = ({ initialOffers }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage offers={initialOffers} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute>
            <FavoritesPage offers={initialOffers.filter((offer) => offer.isFavorite)} />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<OfferPage offers={initialOffers} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;