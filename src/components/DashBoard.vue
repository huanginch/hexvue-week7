<template>
    <aside class="dashboard d-flex flex-column px-5 bg-dark">
        <h2 class="text-white mb-5">歡迎使用後台</h2>
        <router-link to="/admin/products" class="dashboard-link mb-3 fs-5">產品管理</router-link>
        <router-link to="/admin/orders" class="dashboard-link mb-3 fs-5">訂單管理</router-link>
        <router-link to="/admin/coupons" class="dashboard-link mb-3 fs-5">優惠券管理</router-link>
        <a href="/" class="signOut mb-3 fs-5 text-decoration-none" @click.prevent="signOut">登出</a>
    </aside>
</template>

<script>
import { mapActions } from 'pinia';
import authStore from '../stores/authStore';

export default {
  name: 'DashBoard',
  methods: {
    ...mapActions(authStore, ['signOut']),
  },
};
</script>

<style lang="scss">
.dashboard {
    position: fixed;
    top: 0;
    padding-top: 70px;
    height: 100vh;
    max-width: 300px;
}

.signOut {
    color: #BAB8B8;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: gray;
    }
}

.dashboard-link {
    transition: all 0.3s ease-in-out;
    &:active {
        color: #BAB8B8;
    }

    &:focus {
        color: #BAB8B8;
    }
}
</style>
