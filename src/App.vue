<template>
  <v-card class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar
          :order="order"
      >
        <template v-slot:append>
          <v-switch
              v-model="order"
              hide-details
              inset
              label="Toggle order"
              true-value="1"
              false-value="0"
          ></v-switch>
        </template>
        <v-img
            src="/logo.png"
            alt="My Logo"
            class="logo-image"
        ></v-img>
        <v-app-bar-title>{{$t("common.title")}}</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
          permanent
      >
        <v-list>
          <v-list-item to="/" prepend-icon="mdi-home" title="Home Page"></v-list-item>

          <v-list-item to="/team" prepend-icon="mdi-shield-account" title="Team"></v-list-item>
          <v-list-item to="/home_page" prepend-icon="mdi-shield-account" title="Home-Page"></v-list-item>
          <v-list-item to="/partners" prepend-icon="mdi-account-group" title="Partners"></v-list-item>
          <v-list-item to="/link" prepend-icon="mdi-link" title="Social Networks"></v-list-item>
          <v-list-item @click="console.log('Download App')" prepend-icon="mdi-download-box" title="Download App" id="download"></v-list-item>
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-switch
                v-model="lang"
                hide-details
                inset
                label="En/中文"
                v-on:change="toggleLanguage"
            ></v-switch>
          </div>
          <div class="pa-2">
            <v-btn block to="/login" color="blue">
              <v-list-item  prepend-icon="mdi-account" title="Login/Register"></v-list-item>
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import {onMounted, reactive} from "vue";
export default {
  name:"App",
  setup(){
    const states = reactive({
      deferredPrompt: null,
    });
    onMounted(() => {
      window.addEventListener("beforeinstallprompt", e => {
        e.preventDefault();
        states.deferredPrompt = e;
      });
      window.addEventListener("appinstalled", () => {
        states.deferredPrompt = null;
      });
      document.querySelector("#download").addEventListener("click", () => {
        if (states.deferredPrompt) {
          states.deferredPrompt.prompt();
          states.deferredPrompt = null;
        }
      });
    });
  },
  data(){
    return{
      drawer:false,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      order: 0,
      lang:false,
    }
  },
  methods: {
    toggleLanguage() {
      if (this.lang) {
        this.$i18n.locale = 'en';
      } else {
        this.$i18n.locale = 'zhTW';
      }
    }
  }
}
</script>
<style scoped>
</style>
