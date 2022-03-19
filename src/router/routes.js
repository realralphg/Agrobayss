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
      // { path: "/fruit", component: () => import("src/pages/Fruit.vue") },

      // { path: "/dashboard", component: () => import("src/pages/Dashboard/Dashboard.vue") },
    ],
  },
  {
    path: "/User",
    name: "user",
    component: () => import("layouts/User.vue"),
    children: [
      { path: "/account", component: () => import("src/pages/Dashboard/Account.vue") },
      { path: "/dashboard", component: () => import("src/pages/Dashboard/AccDash.vue"), name: 'dashboard' },
      { path: "/savings", component: () => import("src/pages/Dashboard/Saving.vue") },
      { path: "/new", component: () => import("src/pages/Dashboard/Newsaving.vue") },
      { path: "/fruits", component: () => import("src/pages/Dashboard/Fruits.vue") },
      { path: "/checkout", component: () => import("src/pages/Dashboard/Checkout.vue") },
      { path: "/plans", component: () => import("src/pages/Dashboard/Plans.vue") },
      { path: "/myplan", component: () => import("src/pages/Dashboard/Dash.vue") },
      { path: "/foodbag", component: () => import("src/pages/Dashboard/Foodbag.vue") },
      // { path: "/bar", component: () => import("src/pages/Views/Bar.vue") },

    ],
  },
  {
    path: "/Admin",
    name: "admin",
    component: () => import("layouts/Admin.vue"),
    children: [
      { path: "/admin/account", component: () => import("src/pages/Dashboard/Account.vue") },
      { path: "/admin/dashboard", component: () => import("src/pages/Dashboard/AccDash.vue"), name:'/admin/dashboard' },
      { path: "/admin/categories", component: () => import("src/pages/Dashboard/Admin/FruitbayCategories.vue") },
      { path: "/admin/item", component: () => import("src/pages/Dashboard/Admin/addFruitbayItems.vue") },
      { path: "/admin/addfruit", component: () => import("src/pages/Dashboard/Admin/addFruit.vue") },
      { path: "/admin/fruitbay", component: () => import("src/pages/Dashboard/Admin/Fruitbay.vue") },
      { path: "/admin/foods", component: () => import("src/pages/Dashboard/Admin/Foods.vue") },
      { path: "/admin/addsaving", component: () => import("src/pages/Dashboard/Admin/addSaving.vue") },
      { path: "/admin/savings", component: () => import("src/pages/Dashboard/Admin/SavingPlans.vue") },
      { path: "/admin/foodbag", component: () => import("src/pages/Dashboard/Admin/Foodbags.vue") },
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
