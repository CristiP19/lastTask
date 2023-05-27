import axios from 'axios';
import Interceptors from './interceptors';

class Http {
  axios;

  constructor(baseURL = "https://shoply-api.nanoit.dev/api") {
    this.axios = axios.create({
      baseURL,
      defaults: {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    });

    Interceptors.request(this);
    Interceptors.response(this);
  }

  getAxiosInstance() {
    return this.axios;
  }

  async get(url, params = {}) {
    console.log(url, params)
    try {
      const response = await this.axios.get(url, {
        params
      });
      return response.data;
    } catch (e) {
      throw e.data;
    }
  }

  async delete(url, data = {}) {
    try {
      const response = await this.axios.delete(url, {
        data,
      });

      if (this.getFullResponse) {
        return response;
      }
      return response.data;
    } catch (e) {
      if (this.getFullResponse) {
        throw e;
      }
      throw e.data;
    }
  }

  async patch(url, data) {
    try {
      const response = await this.axios.patch(url, data);

      if (this.getFullResponse) {
        return response;
      }
      return response.data;
    } catch (e) {
      if (this.getFullResponse) {
        throw e;
      }
      throw e.data;
    }
  }

  async post(url, data) {
    try {
      const response = await this.axios.post(url, data);

      if (this.getFullResponse) {
        return response;
      }
      return response.data;
    } catch (e) {
      if (this.getFullResponse) {
        throw e;
      }
      throw e.data;
    }
  }
}

export default Http;
