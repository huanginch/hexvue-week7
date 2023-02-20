<template>
    <div class="container">
        <h1>訂單管理</h1>
        <table class="table align-middle">
            <thead>
                <tr>
                <th>訂單編號</th>
                <th>訂單成立日期</th>
                <th>訂購人</th>
                <th>價格</th>
                <th>狀態</th>
                <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                <th>{{ order.id }}</th>
                <td>{{ order.create_at }}</td>
                <td>{{ order.user.name }}</td>
                <td>{{ order.total }}</td>
                <td v-if="order.status==0">已成立 </td>
                <td v-if="order.status==1">未處理</td>
                <td v-if="order.status==2">已出貨</td>
                <td v-if="order.status==3">已完成</td>
                <td>
                    <button
                    type="button"
                    class="btn btn-secondary me-3"
                    @click="this.$refs.orderModal.openModal();
                    this.order=JSON.parse(JSON.stringify(order));
                    ">編輯</button>
                    <button
                    type="button"
                    class="btn btn-outline-primary"
                    @click="this.$refs.delModal.openModal();
                    message = `確定要刪除訂單編號為${order.id}的訂單嗎?`;
                    delFunc=deleteOrder.bind(this, order.id);
                    "
                    >刪除</button>
                </td>
                </tr>
            </tbody>
        </table>
        <PaginationComponent :pages="pagination"></PaginationComponent>
    </div>
    <orderModal ref="orderModal" :order="order"></orderModal>
    <DelConfirmModal ref="delModal" :message="message" :delFunc="delFunc"/>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import orderStore from '../../stores/orderStore';
import authStore from '../../stores/authStore';
import orderModal from '../../components/OrderModal.vue';
import DelConfirmModal from '../../components/DelConfirmModal.vue';
import PaginationComponent from '../../components/PaginationComponent.vue';

export default {
  name: 'OrdersView',
  data() {
    return {
      order: {},
      message: '',
      delFunc: null,
    };
  },
  computed: {
    ...mapState(orderStore, ['orders', 'pagination']),
  },
  methods: {
    changePage(page) {
      this.getOrders(page);
    },
    ...mapActions(orderStore, ['getOrders', 'deleteOrder']),
    ...mapActions(authStore, ['checkAuth']),
  },
  mounted() {
    this.checkAuth();
    this.getOrders();
  },
  components: {
    orderModal,
    DelConfirmModal,
    PaginationComponent,
  },
};
</script>

<style>
h1 {
    margin-top: 70px;
    margin-bottom: 30px;
}
</style>
