// src/components/offers-list/OffersList.tsx
import { Offer } from '../../mocks/offers';
import OfferCard from '../offer-card/OfferCard';
import { useState } from 'react';

interface OffersListProps {
  offers: Offer[];
  isMainPage?: boolean;
}

export default function OffersList({ offers, isMainPage = true }: OffersListProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className={`${isMainPage ? 'cities__places-list' : 'near-places__list'} places__list tabs__content`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          isMainPage={isMainPage}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}
