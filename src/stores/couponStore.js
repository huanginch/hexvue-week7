import { defineStore } from 'pinia';
import axios from 'axios';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default defineStore('couponStore', {
  state: () => ({
    coupons: [],
  }),
  actions: {
    getCoupons(page = 1) {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          this.coupons = res.data.coupons;
          console.log(this.coupons);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    updateCoupon(coupon, isNew) {
      const url = isNew ? `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon` : `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${coupon.id}`;
      const http = isNew ? 'post' : 'put'; // coupon新的: 新增, coupon已存在: 修改

      axios[http](url, { data: coupon })
        .then((res) => {
          alert(res.data.message);
          this.getCoupons();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    deleteCoupon(id) {
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getCoupons();
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  },
});
