import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://imdb-api.com/en/API/',
  });
};
