import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadAllBeers } from './../services/beers';
import NavBar from './NavBar';

class HomeView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: null,
    };
  }

  componentDidMount() {
    loadAllBeers()
      .then((data) => {
        this.setState({
          beers: data,
          loaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.loaded && (
          <>
            {this.state.beers.map((beer) => (
              <Link key={beer._id} to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt={beer.name} />
                <h3>Name: {beer.name}</h3>
                <p>Tagline: {beer.tagline}</p>
                <p>Contributed by: {beer.contributed_by}</p>
              </Link>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default HomeView;
