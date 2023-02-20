<template>
    <div class="container">
        <div
        class="productHeader d-flex align-items-center justify-content-between align-middle">
            <h1 class="m-0">產品管理</h1>
            <button
            type="button"
            class="btn btn-secondary float-end text-white align-items-center"
            @click="this.$refs.pModal.openModal();
            this.product={}; this.isNew=true;
            ">
            <iconify-icon icon="material-symbols:add"></iconify-icon>
            新增產品
            </button>
        </div>
        <table class="table align-middle">
            <thead>
                <tr>
                <th>ID</th>
                <th>種類</th>
                <th>名稱</th>
                <th>原價</th>
                <th>售價</th>
                <th>庫存</th>
                <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product) in products" :key="product.id">
                <th>{{ product.id }}</th>
                <td>{{ product.category }}</td>
                <td>{{ product.title }}</td>
                <td>{{ product.origin_price }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.num }}</td>
                <td>
                    <button
                    type="button"
                    class="btn btn-secondary me-3"
                    @click="this.$refs.pModal.openModal();
                    this.product=JSON.parse(JSON.stringify(product)); this.isNew=false">
                    編輯
                    </button>
                    <button type="button" class="btn btn-outline-primary"
                    @click="this.$refs.delModal.openModal();
                    message=`確定要刪除 ${product.title} 嗎?`;
                    delFunc=deleteProduct.bind(this, product.id)"
                    >刪除</button>
                </td>
                </tr>
            </tbody>
        </table>
        <PaginationComponent :pages="pagination" @changePage="changePage"/>
    </div>

    <ProductModal ref="pModal" :product="product" :isNew="isNew"/>
    <DelConfirmModal ref="delModal" :message="message" :delFunc="delFunc"/>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import productStore from '../../stores/productStore';
import authStore from '../../stores/authStore';
import ProductModal from '../../components/ProductModal.vue';
import DelConfirmModal from '../../components/DelConfirmModal.vue';
import PaginationComponent from '../../components/PaginationComponent.vue';

export default {
  name: 'ProductsView',
  data() {
    return {
      product: {},
      isNew: true,
      message: '',
      delFunc: null,
    };
  },
  computed: {
    ...mapState(productStore, ['products', 'pagination']),
  },
  methods: {
    changePage(page) {
      this.getProducts(page);
    },
    ...mapActions(productStore, ['getProducts', 'deleteProduct']),
    ...mapActions(authStore, ['checkAuth']),
  },
  mounted() {
    this.checkAuth();
    this.getProducts();
  },
  components: {
    ProductModal,
    DelConfirmModal,
    PaginationComponent,
  },
};

</script>

<style>
.productHeader {
    margin-top: 70px;
    margin-bottom: 30px;
}
</style>
