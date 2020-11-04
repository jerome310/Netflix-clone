import axios from 'axios';

// base url to make requests to the movie database

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

// instance variable will allow us to append a get request when we send one to this variable
export default instance; 