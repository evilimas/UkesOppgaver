const registry = {};

const renderWrapper = (component: any) => {
  return (targetElement: any, state: any) => {
    const element = component(targetElement, state);

    const childComponents = element.querySelectorAll('[data-component]');

    Array.from(childComponents).forEach((target: any) => {
      const name = target.dataset.component;

      const child = registry[name];
      if (!child) {
        return;
      }

      target?.replaceWith(child(target, state));
    });

    return element;
  };
};

const add = (name: string | number, component: any) => {
  registry[name] = renderWrapper(component);
};

const renderRoot = (root: any, state: Object) => {
  const cloneComponent = (root: Element) => {
    return root.cloneNode(true);
  };

  return renderWrapper(cloneComponent)(root, state);
};

export default { renderRoot, add };
