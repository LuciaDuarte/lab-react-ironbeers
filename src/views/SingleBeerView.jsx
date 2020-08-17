import React, { Component } from 'react';
import { loadBeer } from './../services/beers';
import NavBar from './NavBar';
import SingleBeer from './Components/SingleBeer';

class SingleBeerView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beer: null,
    };
  }

  componentDidMount() {
    loadBeer(this.props.match.params.id)
      .then((data) => {
        this.setState({
          beer: data,
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
            <SingleBeer beer={this.state.beer} />
          </>
        )}
      </div>
    );
  }
}

export default SingleBeerView;
