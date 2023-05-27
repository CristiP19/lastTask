import AppUser from 'api/core/AppUser';


class Interceptor {
  static getUser() {
    try {
      return AppUser.getInstance().getUser();
    } catch (e) {
      return null;
    }
  }

  static request(httpInstance) {
    httpInstance.getAxiosInstance().interceptors.request.use(
      async (config) => {
        const queryConfig = config;
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          queryConfig.headers.Authorization = `Bearer ${user.accessToken}`
        }

        return queryConfig;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  static response(httpInstance) {
    httpInstance.getAxiosInstance().interceptors.response.use(
      async (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401 && window.location.pathname !== '/401') {
          window.location.href = '/login';
        }

        return Promise.reject(error.response);
      }
    );
  }
}

export default Interceptor;
