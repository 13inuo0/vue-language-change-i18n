import AdminHome from "@/pages/admin/AdminHome.vue";
import Dashboard_admin from "@/pages/admin/Dashboard_admin.vue";
import LoginAdmin from "@/pages/admin/LoginAdmin.vue";
import LoginWorker from "@/pages/worker/LoginWorker.vue";
import HomeVue from "@/views/Home.vue";
import ReserVue from "@/views/Reser.vue";
import ReviewVue from "@/views/Review.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: HomeVue, name: "HomeVue" },
  { path: "/reser", component: ReserVue, name: "ReserVue" },
  { path: "/review", component: ReviewVue, name: "ReviewVue" },

  // 관리자 페이지
  { path: "/admin", component: LoginAdmin, name: "LoginAdmin" },
  { path: "/admin", component: AdminHome, redirect:"admin/dashboard",
    children:[
      {path: "dashboard", component: Dashboard_admin, }
    ],
     },
  // 기사 페이지
  { path: "/worker", component: LoginWorker, name: "LoginWorker" },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
