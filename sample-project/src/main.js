import { createApp } from "vue";
import App from "./App.vue";
import UserInfo from "./components/UserInfo.vue";
import NewUser from "./components/NewUser.vue";
import UserContainer from "./components/UserContainer.vue";
import UserDiv from "./components/UserDiv.vue";

const app = createApp(App);

app.component("user-div", UserDiv);
app.component("user-container", UserContainer);
app.component("user-info", UserInfo);
app.component("new-user", NewUser);

app.mount("#app");
