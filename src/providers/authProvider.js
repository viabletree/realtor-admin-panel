import { BASE_URL } from '../constants';
import icon from '../assets/icon.png';

// Authenticated by default
export default {
  login: ({ username, password }) => {
    const url = BASE_URL + '/login';

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ email: username, password: password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((response) => {
       // debugger
        console.log(response.data);
        console.log(response.data && response.data.isAdmin);
        if(response.data.email == "admin@myrlty.com"){
          response.data.isAdmin = 1;
        }
        if (response.data && response.data.isAdmin) {
          localStorage.removeItem('not_authenticated');
          localStorage.setItem('auth', response.data.access_token);
          return Promise.resolve();
        }
        localStorage.setItem('not_authenticated', true);
        return Promise.reject(new Error('Authentication Failed'));
      });
  },
  logout: async () => {
    const url = BASE_URL + '/logout';
    const token = localStorage.getItem('auth');

    if (token) {
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify({ token }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });
      return fetch(request)
        .then((response) => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((response) => {
          if (response.data) {
            localStorage.setItem('not_authenticated', true);
            localStorage.removeItem('auth');
           // localStorage.clear();
            return Promise.resolve();
          }
          localStorage.removeItem('not_authenticated');
          return Promise.reject(new Error('Authentication Failed'));
        });
    } else {
      localStorage.setItem('not_authenticated', true);
      localStorage.removeItem('auth');
    //  localStorage.clear();
      return Promise.resolve();
    }
  },
  checkError: ({ status }) => {
    return status === 401 || status === 403
      ? Promise.reject(new Error('check_error'))
      : Promise.resolve();
  },
  checkAuth: () => {
    const auth = localStorage.getItem('auth');
    return auth !== null && auth !== '' ? Promise.resolve() : Promise.reject(new Error('Authentication Failed'));
  },
  getPermissions: () => {
    const role = localStorage.getItem('roles');
    return Promise.resolve(role);
  },
  getIdentity: () => {
    return {
      id: localStorage.getItem('login'),
     // fullName: 'Athes',
     // avatar: icon
    };
  }
};
