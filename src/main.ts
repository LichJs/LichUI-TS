import Vue from 'vue';
import { makeHot, reload } from './util/hot-reload';
import { createRouter } from './createrouter';
const navbarComponent = () => import('./components/navbar').then(({ NavbarComponent }) => NavbarComponent);
// const navbarComponent = () => import(/* webpackChunkName: 'navbar' */'./components/navbar').then(({ NavbarComponent }) => NavbarComponent)

import './sass/rem-vw/rem-vw.scss';
import './sass/main.scss';

if (process.env.ENV === 'development' && module.hot) {
  const navbarModuleId = './components/navbar';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
// tslint:disable-next-line: no-floating-promises
  makeHot(navbarModuleId, navbarComponent,
// tslint:disable-next-line: no-unnecessary-type-assertion
    module.hot.accept('./components/navbar', () => reload(navbarModuleId, (require('./components/navbar') as any).NavbarComponent)));
}

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'navbar': navbarComponent
  }
});
