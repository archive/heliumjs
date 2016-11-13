export const wireElements = (component) => {
  const defaults = component.defaults();

  if (!defaults.el) {
    return;
  }

  if (component.el) {
    throw 'class.el is reserved for auto binding';
  }
  component.el = {};

  Object.keys(defaults.el).forEach(key => {
    component.el[key] = lazyLoad.bind(null, component, defaults.el[key], key);
  });
};

const lazyLoad = (component, selector, key) => {
  if (!component.el[`__${key}`]) {
    const elements = component.node.querySelectorAll(selector);

    if (!elements) {
      console.warn('Cant find element(s)', selector, key);
      return;
    }

    component.el[`__${key}`] = elements.length === 1 ? elements[0] : elements;
  }
  return component.el[`__${key}`];
};

