import { makeHot } from './util/hot-reload';
import { reload } from 'vue-hot-reload-api';
import modules from '../config/router';

export default function hotreload (): void {
  if (process.env.ENV === 'development' && module.hot) {

    modules.map((mod) => {
      if (module.hot && module.hot.accept) {
        // tslint:disable-next-line: no-floating-promises
        makeHot(
          mod.name,
          mod.component,
          module.hot.accept(mod.name, () => reload(mod.name, mod.reloadfun))
        );
      }
    });
  }
}
