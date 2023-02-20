import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

const { VITE_APP_URL } = import.meta.env;

export default defineStore('authStore', {
  state: () => ({
    isLogged: false,
  }),
  actions: {
    signIn(username, password) {
      this.isLoading = true;
      axios
        .post(`${VITE_APP_URL}/admin/signin`, {
          username,
          password,
        })
        .then((res) => {
          this.isLogged = true;
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expired=${new Date(expired)};`;
          alert(res.data.message);
          router.push('/admin/products');
        })
        .catch((err) => {
          this.isLogged = false;
          alert(err.response.data.message);
        });
    },
    signOut() {
      axios.post(`${VITE_APP_URL}/logout`)
        .then((res) => {
          alert(res.data.message);
          this.isLogged = false;
          router.push('/');
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    checkAuth() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      axios.defaults.headers.common.Authorization = token;

      axios.post(`${VITE_APP_URL}/api/user/check`)
        .then(() => {
          this.isLogged = true;
        })
        .catch((err) => {
          this.isLogged = false;
          router.push('/');
          alert(err.response.data.message);
        });
    },
  },
});
