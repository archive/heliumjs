import {constructComponent} from './component';
import {store} from './store';

export const registry = {
  attach: (contextSelector, Component) => {
    const id = Component.id();
    if (!id) {
      throw 'Missing id' + Component;
    }

    if (!store[id]) {
      store[id] = [];
    }

    const component = constructComponent(contextSelector, Component);
    store[id].push(component);
  },

  detach: (Component) => {
    console.log(Component);
    //const id = Component.id();
    //removeEventListener(...)
  },

  detachAll: () => {
    console.log();
  }
};
