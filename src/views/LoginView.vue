<template>
  <div class="container text-center mt-5">
    <h1 class="mb-5">Welcome to WineWorld</h1>
    <div class="row">
      <div class="col-12 col-md-8 col-lg-6 mx-auto">
        <VForm
          @submit="signIn(username, password)"
          v-slot="{ errors }"
          class="mb-5"
        >
          <label for="username" class="mb-2">帳號</label>
          <VField
            id="username"
            name="username"
            type="email"
            class="form-control mb-3"
            rules="email|required"
            :class="{
              'is-invalid': errors['username'],
              'is-valid': !errors['username'] && username,
            }"
            placeholder="請輸入帳號/Email"
            v-model="username"
          />
          <error-message
            name="username"
            class="invalid-feedback mb-3"
          ></error-message>
          <label for="pwd" class="mb-2">密碼</label>
          <VField
            id="pwd"
            name="pwd"
            type="password"
            class="form-control mb-3"
            rules="required"
            :class="{
              'is-invalid': errors['pwd'],
              'is-valid': !errors['pwd'] && password,
            }"
            placeholder="請輸入密碼"
            v-model="password"
          />
          <error-message name="pwd" class="invalid-feedback"></error-message>
          <button type="submit" class="btn btn-primary mt-3 text-white">
            登入
          </button>
        </VForm>
      </div>
    </div>
  </div>
  <MyLoading v-model:active="isLoading"></MyLoading>
</template>

<script>
import { mapActions } from 'pinia';
import authStore from '../stores/authStore';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(authStore, ['signIn']),
  },
};

</script>
