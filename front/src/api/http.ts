import axios from 'axios';
import { END_POINT } from './url';
import { Apis, Async, Http } from '../types/api';

export const HTTP: Http = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
});



export const APIs: Apis = {

    healthCheck: (): Async => {
      return HTTP.get('/healthCheck');
    }

}
