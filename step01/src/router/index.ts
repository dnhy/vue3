import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/ReactivityFd",
    name: "ReactivityFd",
    component: () => import("../views/ReactivityFd.vue"),
  },
  {
    path: "/ComputedProp",
    name: "ComputedProp",
    component: () => import("../views/ComputedProp.vue"),
  },
  {
    path: "/WatchEffect",
    name: "WatchEffect",
    component: () => import("../views/WatchEffect.vue"),
  },
  {
    path: "/ComponentTest",
    name: "ComponentTest",
    component: () => import("../views/ComponentTest.vue"),
  },
  {
    path: "/ProvideReject",
    name: "ProvideReject",
    component: () => import("../views/ProvideReject.vue"),
  },
  {
    path: "/MouseTrack",
    name: "MouseTrack",
    component: () => import("../views/MouseTrack.vue"),
  },
  {
    path: "/PiniaTest",
    name: "PiniaTest",
    component: () => import("../views/PiniaTest.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
