import AdminHome from "@/pages/admin/AdminHome.vue";
import Communication from "@/pages/admin/Communication.vue";
import Customers from "@/pages/admin/Customers.vue";
import Dashboard_admin from "@/pages/admin/Dashboard_admin.vue";
import Inquiries from "@/pages/admin/Inquiries.vue";
import LoginAdmin from "@/pages/admin/LoginAdmin.vue";
import Reservations from "@/pages/admin/Reservations.vue";
import Settings from "@/pages/admin/Settings.vue";
import Worker_admin from "@/pages/admin/Worker_admin.vue";
import Calender from "@/pages/worker/Calender.vue";
import Dashboard from "@/pages/worker/Dashboard.vue";
import Jobs from "@/pages/worker/Jobs.vue";
import LoginWorker from "@/pages/worker/LoginWorker.vue";
import Payment from "@/pages/worker/Payment.vue";
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
  {
    path: "/admin",
    component: AdminHome,
    redirect: "admin/dashboard",
    children: [
      { path: "dashboard", component: Dashboard_admin },
      { path: "reservations", component: Reservations },
      { path: "workers", component: Worker_admin },
      { path: "customer-communication", component: Communication },
      { path: "customers", component: Customers },
      { path: "inquiries", component: Inquiries },
      { path: "settings", component: Settings },
    ],
  },
  // 기사 페이지
  { path: "/worker", component: LoginWorker, name: "LoginWorker" },
  { path: "/worker/dashboard", component: Dashboard, redirect:"/worker/dashboard/jobs",
    children:[
      {path: "jobs", component:Jobs, name:"mobileJobs"},
      {path: "calender", component:Calender, name:"mobileCalender"},
      {path: "payment", component:Payment, name:"mobilePayment"},
    ]

   },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
