import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFontAwesome,
  faLine,
  faGithubSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFontAwesome,
  faUserSecret,
  faCoffee,
  faGithubSquare,
  faLine,
  faFacebookSquare
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
