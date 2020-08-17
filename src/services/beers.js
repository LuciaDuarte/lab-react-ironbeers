import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

export const loadAllBeers = () => {
  return instance.get('/').then((response) => {
    const data = response.data;
    return data;
  });
};

export const loadBeer = (id) => {
  return instance.get(`/${id}`).then((response) => {
    const data = response.data;
    return data;
  });
};

export const loadRandomBeer = () => {
  return instance.get('/random').then((response) => {
    const data = response.data;
    return data;
  });
};
