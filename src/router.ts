import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import hotreload from './hotreload';
import routerConfig from '../config/router';

hotreload();

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => {
  let router: RouteConfig[] = [];
  routerConfig.map((item: any) => {
    let route = item.router;
    router.push(route);
  });
  return router;
};

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
