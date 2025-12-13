// src/components/offer-card/OfferCard.tsx
import { Offer } from '../../mocks/offers';
import { Link } from 'react-router-dom';

interface OfferCardProps {
  offer: Offer;
  isMainPage?: boolean;
}

export default function OfferCard({ offer, isMainPage = true }: OfferCardProps) {
  const cardClass = isMainPage ? 'cities__card' : 'near-places__card';
  const imageWrapperClass = isMainPage
    ? 'cities__image-wrapper place-card__image-wrapper'
    : 'near-places__image-wrapper place-card__image-wrapper';

  return (
    <article className={`${cardClass} place-card`}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={imageWrapperClass}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.images[0]}
            width={isMainPage ? 260 : 150}
            height={isMainPage ? 200 : 110}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              offer.isFavorite ? 'place-card__bookmark-button--active' : ''
            } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">
          {offer.type === 'apartment' ? 'Apartment' : 'Room'}
        </p>
      </div>
    </article>
  );
}
