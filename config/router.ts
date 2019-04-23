
const homeComponent = () => import(/* webpackChunkName: 'home' */'../src/components/home').then(({ HomeComponent }) => HomeComponent);
const aboutComponent = () => import(/* webpackChunkName: 'about' */'../src/components/about').then(({ AboutComponent }) => AboutComponent);
const listComponent = () => import(/* webpackChunkName: 'list' */'../src/components/list').then(({ ListComponent }) => ListComponent);
export default [{
  name: './components/home',
  component: homeComponent,
  router: {
    path: '/',
    component: homeComponent
  },
  reloadfun: (require('../src/components/home')).HomeComponent
}, {
  name: './components/about',
  component: aboutComponent,
  router: {
    path: '/about',
    component: aboutComponent
  },
  reloadfun: (require('../src/components/about')).AboutComponent
}, {
  name: './components/list',
  component: listComponent,
  reloadfun: (require('../src/components/list')).ListComponent,
  router: {
    path: '/list',
    component: listComponent
  }
}];
