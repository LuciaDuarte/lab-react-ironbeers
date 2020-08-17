import React from 'react';
import NavBar from './NavBar';

function NewBeerView(props) {
  return (
    <div>
      <NavBar />
      <h1>Add a new beer</h1>
      <form
        className="form-group"
        action="https://ih-beers-api2.herokuapp.com/beers/new"
        method="POST"
      >
        <label htmlFor="name-input">Name</label>
        <input
          className="form-control mb-2"
          type="text"
          name="name"
          id="name-input"
        />
        <label htmlFor="tagline-input">Tagline</label>
        <input
          className="form-control mb-2"
          type="text"
          name="tagline"
          id="tagline-input"
        />
        <label htmlFor="description-input">Description</label>
        <input
          className="form-control mb-2"
          type="text"
          name="description"
          id="description-input"
        />
        <label htmlFor="first-brewed-input">First Brewed</label>
        <input
          className="form-control mb-2"
          type="text"
          name="first_brewed"
          id="first-brewed-input"
        />
        <label htmlFor="brewers-tips-input">Brewers Tips</label>
        <input
          className="form-control mb-2"
          type="text"
          name="brewers_tips"
          id="brewers-tips-input"
        />
        <label htmlFor="attenuation-level-input">Attenuation Level</label>
        <input
          className="form-control mb-2"
          type="number"
          name="attenuation_level"
          id="attenuation-level-input"
        />
        <label htmlFor="contributed-by-input">Contributed by</label>
        <input
          className="form-control mb-2"
          type="text"
          name="contributed_by"
          id="contributed-by-input"
        />

        <button className="btn btn-primary">Add new</button>
      </form>
    </div>
  );
}

export default NewBeerView;
