import {wireDomEvents} from './wire/dom-events';
import {wireCustomEvents, publish, subscribe} from './wire/custom-events';
import {wireElements} from './wire/elements';

export const constructComponent = (contextSelector, Component) => {

  if (!Component.prototype.publish) {
    Component.prototype.publish = publish;
    Component.prototype.subscribe = subscribe;
  }

  const component = new Component();
  bindToDomContext(contextSelector, component);

  if (component.defaults) {
    wireDomEvents(component);
    wireCustomEvents(component);
    wireElements(component);
  }

  return component;
};

const bindToDomContext = (contextSelector, component) => {
  const context = document.querySelector(contextSelector);
  if (!context) {
    throw `Cant find any element(s) for ${contextSelector}`;
  }
  component.node = context;
};
