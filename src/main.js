import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { loadFonts } from './plugins/webfontloader';
import vuetify from './plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';
import i18n from "./plugins/i18n.js";

import '@mdi/font/css/materialdesignicons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import { registerSW } from 'virtual:pwa-register';



const app = createApp(App);
app.use(router)
app.use(VueAxios, axios);
app.use(loadFonts);
app.use(AOS.init());
app.use(VueSweetalert2);
app.use(vuetify);
app.use(i18n)
app.mount('#app');