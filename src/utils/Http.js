import axios from 'axios';

const DEFAULT_CONFIG = {
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
};
export default class Http {

  async  get(url) {
    try {
      const response = await axios.get(process.env.REACT_APP_URL_API + url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

}