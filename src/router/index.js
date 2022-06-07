import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/MainPage.vue"),
    children: [
      {
        path: "/primary",
        alias: "/",
        component: () => import("../views/PrimaryPage.vue"),
      },
      {
        path: "/osnovnye_napravleniya_deyatelnosti",
        component: () => import("../views/ActivityPage.vue"),
      },
      {
        path: "/sotrudniki",
        component: () => import("../views/EmployeesPage.vue"),
      },
      {
        path: "/fond_tnpa",
        component: () => import("../views/FondTnpa.vue"),
      },
      {
        path: "/periodicheskie_izdaniya",
        component: () => import("../views/PeriodicalPage.vue"),
      },
      {
        path: "/standartizatsiya",
        component: () => import("../views/Standartizatsiya.vue"),
      },
      {
        path: "/metrologicheskoe_obespechenie",
        component: () => import("../views/MetrologicSupport.vue"),
      },
      {
        path: "/quality_menegment",
        component: () => import("../views/QualManagementPage.vue"),
      },
      {
        path: "/zashchita_personal_dannykh",
        component: () => import("../views/ZashchitaPersonalDannykh.vue"),
      },
      {
        path: "/localData",
        component: () => import("../views/localPage.vue"),
      },
    ],
  },
  {
    path: "/not-found",
    name: "notFound",
    component: () => import("../views/404.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: { name: "notFound" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
