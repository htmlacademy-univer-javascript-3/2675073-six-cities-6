import React from 'react';
import Header from '../header/header';

function OfferNotLoggedPage(): React.JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          {/* ... Разметка страницы предложения для неавторизованного пользователя ... */}
        </section>
      </main>
    </div>
  );
}
export default OfferNotLoggedPage;
