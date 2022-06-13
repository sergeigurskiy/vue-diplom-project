import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/index";
import "./assets/scss/main.scss";
import "./assets/scss/fonts.scss";

createApp(App)
    .use(router)
    .use(store)
    .mount("#app")
