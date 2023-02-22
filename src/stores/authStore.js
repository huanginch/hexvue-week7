import { defineStore } from 'pinia';
import axios from 'axios';
import swal from 'sweetalert2';
import '@sweetalert2/themes/dark/dark.scss';
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
          swal.fire({
            icon: 'success',
            title: '登入成功',
            showConfirmButton: false,
            timer: 1500,
          });
          router.push('/admin/products');
        })
        .catch((err) => {
          this.isLogged = false;
          swal.fire({
            icon: 'error',
            title: '很不幸的...',
            text: err.response.data.message,
          });
        });
    },
    signOut() {
      axios.post(`${VITE_APP_URL}/logout`)
        .then((res) => {
          swal.fire({
            icon: 'success',
            title: '掰掰',
            tesxt: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.isLogged = false;
          router.push('/');
        })
        .catch((err) => {
          swal.fire({
            icon: 'error',
            title: '掰掰失敗',
            text: err.response.data.message,
          });
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
          swal.fire({
            icon: 'error',
            title: '很不幸的...',
            text: err.response.data.message,
          });
        });
    },
  },
});
