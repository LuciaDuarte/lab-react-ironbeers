import React from 'react';
import beers from '../beers.jpg';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div>
      <Link to="/beers">
        <section>
          <img src={beers} alt="beers" />
          <h4>All Beers</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aut doloremque ratione atque quas minus beatae rerum non sit
            adipisci? Officia saepe veniam nam enim sapiente mollitia nisi,
            minus quae.
          </p>
        </section>
      </Link>
      <Link to="/random-beer">
        {' '}
        <section>
          <img src={beers} alt="beers" />
          <h4>Random Beer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aut doloremque ratione atque quas minus beatae rerum non sit
            adipisci? Officia saepe veniam nam enim sapiente mollitia nisi,
            minus quae.
          </p>
        </section>
      </Link>
      <Link to="/new-beer">
        {' '}
        <section>
          <img src={beers} alt="beers" />
          <h4>New Beer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            aut doloremque ratione atque quas minus beatae rerum non sit
            adipisci? Officia saepe veniam nam enim sapiente mollitia nisi,
            minus quae.
          </p>
        </section>
      </Link>
    </div>
  );
};

export default HomeView;
