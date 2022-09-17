import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Settings from "../views/Settings.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/settings", component: Settings },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
