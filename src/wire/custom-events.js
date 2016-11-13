export const wireCustomEvents = (component) => {
  const defaults = component.defaults();

  if (!defaults.events) {
    return;
  }

  const events = Object.keys(defaults.events).filter(x => typeof defaults.events[x] === 'function');

  events.forEach(key => {
    subscribe(key, defaults.events[key].bind(component));
  });
};

let callbacks = [];

export const publish = (topic, payload = {}) => {
  if (!callbacks[topic]) {
    return;
  }
  callbacks[topic].forEach(callback => callback(payload));
};

// todo: change to promise
export const subscribe = (topic, callback) => {
  if (!callbacks[topic]) {
    callbacks[topic] = [];
  }
  callbacks[topic].push(callback);
};
