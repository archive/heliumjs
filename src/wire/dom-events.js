export const wireDomEvents = (component) => {
  const defaults = component.defaults();

  if (!defaults.events) {
    return;
  }

  const events = Object.keys(defaults.events).filter(x => typeof defaults.events[x] === 'object');

  // todo: change to event delegation on host node
  events.forEach(key => {
    const items = defaults.events[key];
    const targets = component.node.querySelectorAll(key);

    Object.keys(items).forEach(item => {
      each(targets, function (index, value) {
        value.addEventListener(item, items[item].bind(component), false);
      });
    });
  });
};

const each = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};
