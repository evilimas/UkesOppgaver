import { State } from './types';
const registry = {};
window.registry = registry;

const renderWrapper = (mainRenderComponentFunction) => {
  return (targetElement: Element, state: State) => {
    const element = mainRenderComponentFunction(targetElement, state);

    const childComponents = element.querySelectorAll('[data-component]');

    Array.from(childComponents).forEach((target) => {
      const name = target.dataset.component;

      const aRenderComponentFunction = registry[name];
      const newElement = aRenderComponentFunction(target, state);
      target.replaceWith(newElement);
    });

    return element;
  };
};

const add = (name, renderComponentFunction) => {
  registry[name] = renderWrapper(renderComponentFunction);
};

const cloneComponent = (root) => root.cloneNode(true);
const renderRoot = renderWrapper(cloneComponent);

export default {
  add,
  renderRoot,
};
