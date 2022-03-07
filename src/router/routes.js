const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/agrofoods", component: () => import("src/pages/Agrofoods.vue") },
      { path: "/", component: () => import("pages/Agrobase.vue") },
      { path: "/agroinvest", component: () => import("pages/Agroinvest.vue") },
      { path: "/agrofarms", component: () => import("pages/Agrofarms.vue") },
      { path: "/agrotech", component: () => import("pages/Agrotech.vue") },
      { path: "/login", component: () => import("src/pages/Login.vue") },
      { path: "/register", component: () => import("src/pages/Register.vue") },
      { path: "/fruits", component: () => import("src/pages/Fruits.vue") },
      { path: "/fruit", component: () => import("src/pages/Fruit.vue") },

      // { path: "/dashboard", component: () => import("src/pages/Dashboard/Dashboard.vue") },
    ],
  },
  {
    path: "/User",
    component: () => import("layouts/User.vue"),
    children: [
      { path: "/account", component: () => import("src/pages/Dashboard/Account.vue") },
      { path: "/dashboard", component: () => import("src/pages/Dashboard/AccDash.vue") },
      { path: "/savings", component: () => import("src/pages/Dashboard/Saving.vue") },
      { path: "/new", component: () => import("src/pages/Dashboard/Newsaving.vue") },
      // { path: "/bar", component: () => import("src/pages/Views/Bar.vue") },

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
