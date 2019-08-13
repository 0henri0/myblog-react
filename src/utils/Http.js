import axios from 'axios';

export default class Http {
  async  get(url) {
    try {
      const response = await axios.get(REACT_APP_URL_API + url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}