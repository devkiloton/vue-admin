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
      {
        path: "/users/:id/links",
        name: "Links",
        component: () => import("../views/Links.vue"),
      },
      {
        path: "/products",
        name: "Products",
        component: () => import("../views/products/Products.vue"),
      },
      {
        path: "/products/create",
        name: "Add Products",
        component: () => import("../views/products/ProductsForm.vue"),
      },
      {
        path: "/products/:id/edit",
        name: "Add Products",
        component: () => import("../views/products/ProductsForm.vue"),
      },
      {
        path: "/orders",
        name: "Orders",
        component: () => import("../views/Orders.vue"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
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
