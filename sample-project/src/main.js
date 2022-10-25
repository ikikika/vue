import { createApp } from "vue";
import App from "./App.vue";
import UserInfo from "./components/UserInfo.vue";

const app = createApp(App);

app.component("user-info", UserInfo);

app.mount("#app");
