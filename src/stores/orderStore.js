import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore('productStore', {
  state: () => ({
    orders: [],
    pagination: {},
  }),
  actions: {
    getOrders(page = 1) {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    updateOrder(order) {
      axios.put(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${order.id}`, { data: order })
        .then((res) => {
          alert(res.data.message);
          this.getOrders();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    deleteOrder(id) {
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/order/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getOrders();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    deleteAllOrders() {
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/orders/all`)
        .then((res) => {
          alert(res.data.message);
          this.getOrders();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
});
