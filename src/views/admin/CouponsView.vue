<template>
    <div class="container">
        <h1>優惠券管理</h1>
        <button
        type="button"
        class="btn btn-secondary float-end text-white align-items-center"
        @click="this.$refs.cModal.openModal();
        this.coupon={}; this.isNew=true;
        ">
        <iconify-icon icon="material-symbols:add"></iconify-icon>
        新增產品
        </button>
        <table class="table text-center align-middle">
            <thead>
                <tr>
                <th>ID</th>
                <th>名稱</th>
                <th>折扣</th>
                <th>到期日</th>
                <th>優惠碼</th>
                <th>數量</th>
                <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(coupon) in coupons"  :key="coupon.id">
                <td>{{ coupon.id }}</td>
                <td>{{ coupon.title }}</td>
                <td>{{ coupon.percent }}</td>
                <td>{{ coupon.due_date }}</td>
                <td>{{ coupon.code }}</td>
                <th>{{ coupon.num }}</th>
                <td>
                    <button class="btn btn-secondary me-3"
                    @click="this.$refs.cModal.openModal();
                    this.coupon=coupon;
                    this.isNew=false;
                    ">編輯</button>
                    <button class="btn btn-outline-primary"
                    @click="this.$refs.delModal.openModal();
                    message = `確定要刪除優惠券${coupon.title}嗎?`;
                    delFunc=deleteCoupon.bind(this, coupon.id);"
                    >刪除</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
    <CouponModal ref="cModal" :coupon="coupon" :isNew="isNew" @update-coupon="updateCoupon">
    </CouponModal>
    <DeleteModal ref="delModal" :message="message" :delFunc="delFunc"></DeleteModal>
    <Pagination :pages="pagination"></Pagination>
    <PageLoading :active="loading"></PageLoading>
    <AlertModal ref="alertModal" :message="responseMessage"></AlertModal>
</template>

<script>
// import { mapActions } from 'pinia';
// import authStore from '../../stores/authStore';
import CouponModal from '../../components/CouponModal.vue';
import DeleteModal from '../../components/DelConfirmModal.vue';
import Pagination from '../../components/PaginationComponent.vue';
import PageLoading from '../../components/PageLoading.vue';

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;

export default {
  name: 'CouponsView',
  data() {
    return {
      coupons: {},
      coupon: {},
      pagination: {},
      isNew: true,
      message: '',
      delFunc: null,
      loading: false,
      responseMessage: '',
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.loading = true;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          this.loading = false;
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
        })
        .catch((error) => {
          this.loading = false;
          this.responseMessage = error.response.data.message;
          this.$swal.fire({
            icon: 'error',
            title: '好像出了點錯誤',
            text: this.responseMessage,
          });
          if (error.response.status === 401) {
            this.$router.push('/');
          }
        });
    },
    updateCoupon(coupon) {
      this.loading = true;
      const url = this.isNew ? `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon` : `${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${coupon.id}`;
      const http = this.isNew ? 'post' : 'put'; // coupon新的: 新增, coupon已存在: 修改

      this.$http[http](url, { data: coupon })
        .then((res) => {
          this.loading = false;
          this.responseMessage = res.data.message;
          this.$swal.fire({
            icon: 'success',
            title: '好耶',
            text: this.responseMessage,
          });
          this.getCoupons();
        })
        .catch((error) => {
          this.loading = false;
          this.responseMessage = error.response.data.message;
          this.$swal.fire({
            icon: 'error',
            title: '好像出了點錯誤',
            text: this.responseMessage,
          });
        });
    },
    deleteCoupon(id) {
      this.loading = true;
      this.$http
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/coupon/${id}`)
        .then((res) => {
          this.loading = false;
          this.responseMessage = res.data.message;
          this.$swal.fire({
            icon: 'success',
            title: '好耶',
            text: this.responseMessage,
          });
          this.getCoupons();
        })
        .catch((error) => {
          this.loading = false;
          this.responseMessage = error.response.data.message;
          this.$swal.fire({
            icon: 'error',
            title: '好像出了點錯誤',
            text: this.responseMessage,
          });
        });
    },
    // ...mapActions(authStore, ['checkAuth']),
  },
  mounted() {
    this.getCoupons();
  },
  components: {
    CouponModal,
    Pagination,
    DeleteModal,
    PageLoading,
  },
};
</script>

<style>
h1 {
    margin-top: 70px;
    margin-bottom: 30px;
}
</style>
