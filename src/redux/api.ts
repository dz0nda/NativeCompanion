import {CLIENT_ID, CLIENT_SECRET, API_URL} from 'react-native-dotenv';
import axios from 'axios';

const config = {
  grant_type: 'client_credentials',
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
};

export function getToken() {
  return axios
    .post(`${API_URL}/oauth/token`, config)
    .then(res => {
      return res.data.access_token;
    })
    .catch(err => console.error(err));
}

export function getUsersFilter(login: string, token: string) {
  return axios
    .get(`${API_URL}/v2/users?filter[login]=${login}`, {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.error(err));
}

export function getUserById(id: number, token: string) {
  return axios
    .get(`${API_URL}/v2/users/${id}`, {
      headers: {Authorization: `Bearer ${token}`},
    })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.error(err));
}
