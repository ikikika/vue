import { createApp } from "vue";
import App from "./App.vue";
import UserInfo from "./components/UserInfo.vue";
import NewUser from "./components/NewUser.vue";

const app = createApp(App);

app.component("user-info", UserInfo);
app.component("new-user", NewUser);

app.mount("#app");
