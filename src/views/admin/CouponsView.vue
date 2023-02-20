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
        <table class="table align-middle">
            <thead>
                <tr v-for="coupon in coupons" :key="coupon.id">
                <th></th>
                <th>名稱</th>
                <th>折扣</th>
                <th>到期日</th>
                <th>優惠碼</th>
                <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>{{ coupon?.id }}</th>
                <td>{{ coupon?.title }}</td>
                <td>{{ coupon?.percent }}</td>
                <td>{{ coupon?.due_date }}</td>
                <td>{{ coupon?.code }}</td>
                <td>
                    <button class="btn btn-secondary me-3"
                    @click="this.$refs.cModal.openModal();
                    this.coupon=coupon;
                    this.isNew=false;
                    ">編輯</button>
                    <button class="btn btn-outline-primary">刪除</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
    <CouponModal ref="cModal" :coupon="coupon" :isNew="isNew"></CouponModal>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import authStore from '../../stores/authStore';
import couponStore from '../../stores/couponStore';
import CouponModal from '../../components/CouponModal.vue';

export default {
  name: 'CouponsView',
  data() {
    return {
      isNew: true,
      message: '',
      delFunc: null,
    };
  },
  computed: {
    ...mapState(couponStore, ['coupons']),
  },
  methods: {
    ...mapActions(authStore, ['checkAuth']),
    ...mapActions(couponStore, ['getCoupons']),
  },
  mounted() {
    this.checkAuth();
    this.getCoupons();
    console.log('coupon in View:', this.coupons);
  },
  components: {
    CouponModal,
  },
};
</script>

<style>
h1 {
    margin-top: 70px;
    margin-bottom: 30px;
}
</style>
