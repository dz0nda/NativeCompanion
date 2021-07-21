import {CLIENT_ID, CLIENT_SECRET, API_URL} from 'react-native-dotenv';
import axios from 'axios';

const configAuth = {
  grant_type: 'client_credentials',
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
};

const configHeader = (token: string) => {
  return {
    headers: {Authorization: `Bearer ${token}`},
  };
};

export async function getToken() {
  try {
    const res = await axios.post(`${API_URL}/oauth/token`, configAuth);
    console.log(new Date(res.data.created_at));
    return res.data;
  } catch (err) {
    console.error('getToken', err);

    throw err;
  }
}

export async function checkToken(token: string) {
  try {
    const res = await axios.get(
      `${API_URL}/oauth/token/info`,
      configHeader(token),
    );
    return res.data;
  } catch (err) {
    console.error('checkToken', err);

    throw err;
  }
}

export async function getUsersFilter(login: string, token: string) {
  try {
    const res = await axios.get(
      `${API_URL}/v2/users?filter[login]=${login}`,
      configHeader(token),
    );
    if (!(Array.isArray(res.data) && res.data.length === 1)) {
      throw new Error();
    }
    return res.data;
  } catch (err) {
    console.log('getUsersFilter', err);

    throw err;
  }
}

export async function getUserById(id: number, token: string) {
  try {
    const res = await axios.get(
      `${API_URL}/v2/users/${id}`,
      configHeader(token),
    );

    return res.data;
  } catch (err) {
    console.error('getUserById', err);

    throw err;
  }
}
