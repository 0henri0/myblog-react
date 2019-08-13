import axios from 'axios';

export default class Http {
  
  async  get(url) {
    try {
      const response = await axios.get('http://localhost:8000' + url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}