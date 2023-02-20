<template>
  <div class="position-relative">
    <DashBoard />
    <div class="inner-page float-end">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DashBoard from '../../components/DashBoard.vue';

export default {
  name: 'AdminView',
  components: {
    DashBoard,
  },
};
</script>

<style>
.inner-page {
  width: calc(100% - 300px);
}
</style>
