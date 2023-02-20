import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore('productStore', {
  state: () => ({
    products: [],
    pagination: {},
  }),
  actions: {
    getProducts(page = 1) {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    updateProduct(product, isNew) {
      const url = isNew ? `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product` : `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${product.id}`;
      const http = isNew ? 'post' : 'put'; // product存在: 修改, product不存在: 新增

      axios[http](url, { data: product })
        .then((res) => {
          alert(res.data.message);
          this.getProducts();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    deleteProduct(id) {
      console.log(id);
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/product/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getProducts();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
});
