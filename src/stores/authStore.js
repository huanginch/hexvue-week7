import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_APP_URL } = import.meta.env;

export default defineStore('authStore', {
  state: () => ({
    isLogged: false,
  }),
  actions: {
    checkAuth() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      axios.defaults.headers.common.Authorization = token;

      axios.post(`${VITE_APP_URL}/api/user/check`)
        .then(() => {
          this.isLogged = true;
        })
        .catch(() => {
          this.isLogged = false;
          // swal.fire({
          //   icon: 'error',
          //   title: '很不幸的...',
          //   text: err.response.data.message,
          // });
        });
    },
  },
});
