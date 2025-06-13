import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import App from "../App";
import OrderList from "../Pages/OrderList";
import AddOrder from "../Pages/AddOrder";
import OrderMenu from "../Pages/OrderMenu";


const rootRoute = createRootRoute({ component: App });

const orderListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: OrderList,
});

const addOrderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/add",
  component: AddOrder,
});

const menuRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/menu",
  component: OrderMenu,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    orderListRoute,
    addOrderRoute,
    menuRoute,
  ]),
});
