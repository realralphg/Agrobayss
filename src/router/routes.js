const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/agrofoods", component: () => import("pages/Index.vue") },
      { path: "/", component: () => import("pages/Agrobase.vue") },
      { path: "/agroinvest", component: () => import("pages/Agroinvest.vue") },
      { path: "/agrofarms", component: () => import("pages/Agrofarms.vue") },
      { path: "/agrotech", component: () => import("pages/Agrotech.vue") },
      { path: "/login", component: () => import("src/pages/Login.vue") },
      { path: "/register", component: () => import("src/pages/Register.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
