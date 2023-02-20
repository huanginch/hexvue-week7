import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'admin-login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/AdminView.vue'),
    children: [
      {
        path: 'products',
        name: 'admin-products',
        component: () => import('../views/admin/ProductsView.vue'),
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('../views/admin/OrdersView.vue'),
      },
      {
        path: 'coupons',
        name: 'admin-coupons',
        component: () => import('../views/admin/CouponsView.vue'),
      },
    ],
    // async beforeEnter(to) {
    //   const authStore = await import('../stores/authStore');
    //   const productStore = await import('../stores/productStore');
    //   const orderStore = await import('../stores/orderStore');
    // },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
