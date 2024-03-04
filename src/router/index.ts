import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/views/Layout.vue";
import { apiClient } from "@/clients";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Layout,
    beforeEnter: async (to, from, next) => {
      const isAuthenticated = await apiClient.auth.user();
      if (!isAuthenticated) next({ name: "Login" });

      next();
    },
    children: [
      {
        path: "",
        redirect: "/users",
      },
      {
        path: "/users",
        name: "Users",
        component: () => import("../views/Users.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
