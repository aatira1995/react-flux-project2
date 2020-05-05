import {baseUrl} from '../constants';
import axios from 'axios';

function get(url, params){
    return axios.get(baseUrl + url);
}

export function getUsers() {
    return get('/api/users');
}