// src/index.tsx
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { OFFERS } from './mocks/offers';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App initialOffers={OFFERS} />);
}
