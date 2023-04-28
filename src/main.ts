import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia"; // 导入 Pinia
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./style.css";
import "@/less/index.less";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia); // 启用 Pinia
app.use(router);
app.mount("#app");
