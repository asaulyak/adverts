import css from './Home.module.css';

export const Home = () => (
  <>
    <section className={css.hero}>
      <div className={css.title}>
        <h1>Affordable Camp Car Rentals</h1>
        <h4>
          Explore our wide range of vehicles and find the perfect rental car for
          your next journey.
        </h4>
      </div>
    </section>
    <section className={css.services}>
      <img src="/adverts/services.jpg" alt="services" className={css.image} />
      <div className={css.description}>
        <h2>Car Rental Services</h2>
        <div className={css.comment}>
          Car rental companies provide a crucial service for travelers, business
          professionals, and those in need of temporary transportation. They
          offer a variety of vehicles to suit different needs, from compact cars
          for city driving to larger vehicles for family vacations. These
          companies often have locations at airports, city centers, and suburban
          areas for customer convenience. Some also offer additional services
          like GPS, child seats, and the option to add additional drivers. Car
          rental companies are an essential part of the travel and
          transportation industry.
        </div>
      </div>
    </section>
  </>
);
