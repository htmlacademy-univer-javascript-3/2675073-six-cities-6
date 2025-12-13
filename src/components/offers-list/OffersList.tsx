// src/components/offers-list/OffersList.tsx
import { Offer } from '../../mocks/offers';
import OfferCard from '../offer-card/OfferCard';

interface OffersListProps {
  offers: Offer[];
  isMainPage?: boolean;
}

export default function OffersList({ offers, isMainPage = true }: OffersListProps) {
  return (
    <div className={`${isMainPage ? 'cities__places-list' : 'near-places__list'} places__list tabs__content`}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} isMainPage={isMainPage} />
      ))}
    </div>
  );
}
