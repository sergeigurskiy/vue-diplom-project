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
        alias: "/",
        component: () => import("../views/Activity.vue"),
      },
      {
        path: "/sotrudniki",
        alias: "/",
        component: () => import("../views/Sotrudniki.vue"),
      },
      {
        path: "/fond_tnpa",
        alias: "/",
        component: () => import("../views/FondTnpa.vue"),
      },
      {
        path: "/periodicheskie_izdaniya",
        alias: "/",
        component: () => import("../views/Periodicheskie.vue"),
      },
      {
        path: "/standartizatsiya",
        alias: "/",
        component: () => import("../views/Standartizatsiya.vue"),
      },
      {
        path: "/metrologicheskoe_obespechenie",
        alias: "/",
        component: () => import("../views/MetrologicheskoeObespechenie.vue"),
      },
      {
        path: "/zashchita_personal_dannykh",
        alias: "/",
        component: () => import("../views/ZashchitaPersonalDannykh.vue"),
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
