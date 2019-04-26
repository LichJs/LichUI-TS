
const homeComponent = () => import(/* webpackChunkName: 'home' */'./components/home').then(({ HomeComponent }) => HomeComponent);
const aboutComponent = () => import(/* webpackChunkName: 'about' */'./components/about').then(({ AboutComponent }) => AboutComponent);
const listComponent = () => import(/* webpackChunkName: 'list' */'./components/list').then(({ ListComponent }) => ListComponent);

export default [{
  name: './components/home',
  component: homeComponent,
  router: {
    path: '/',
    component: homeComponent
  },
  reloadfun: (require('./components/home')).HomeComponent
}, {
  name: './components/about',
  component: aboutComponent,
  router: {
    path: '/about',
    component: aboutComponent
  },
  reloadfun: (require('./components/about')).AboutComponent
}, {
  name: './components/list',
  component: listComponent,
  reloadfun: (require('./components/list')).ListComponent,
  router: {
    path: '/list',
    component: listComponent
  }
}];
