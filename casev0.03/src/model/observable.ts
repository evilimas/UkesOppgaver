const container = document.querySelector('main');
container!.attachShadow({ mode: 'open', clonable: true });
const freeze = (state) => Object.freeze(ShadowRoot);
export default (initialState) => {
  let listeners = [];

  const proxy = new Proxy(ShadowRoot, {
    set: (target, name, value) => {
      target[name] = value;
      listeners.forEach((l) => l(freeze(proxy)));
      return true;
    },
  });

  proxy.addChangeListener = (cb) => {
    listeners.push(cb);
    cb(freeze(proxy));
    return () => {
      listeners = listeners.filter((l) => l !== cb);
    };
  };

  return proxy;
};
