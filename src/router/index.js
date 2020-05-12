import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter);

import homes from "./moudles/home";
import carts from "./moudles/cart";
import finds from "./moudles/find";
import mys from "./moudles/my";
import shops from "./moudles/shop";

let routes = [...homes, ...carts, ...finds, ...mys, ...shops];

let router = new VueRouter({
  routes,
});

export default router;
