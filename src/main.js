import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';

import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, email, min, numeric,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import * as bootstrap from 'bootstrap';

// sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import App from './App.vue';
import router from './router';

// VeeValidate
import zhTW from '../zh_TW.json';

// style
import './assets/all.scss';

window.bootstrap = bootstrap;

const app = createApp(App);

// VeeValidate rules and translate setting
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('numeric', numeric);
configure({
  // Generates an English message locale generator
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);

// app.component('MyLoading', MyLoading);
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
