import { AppState } from "./types";

const freeze = (state: AppState) => Object.freeze(window.structuredClone(state))


export default (initialState: any) => {
  let listeners: any[] = [];

  const proxy = new Proxy(window.structuredClone(initialState), {
    set: (target, name, value) => {
      target[name] = value;
      listeners.forEach((l) => l(freeze(proxy)));
      return true;
    },
  });

  proxy.addChangeListener = (cb: (arg0: any) => void) => {
    listeners.push(cb);
    cb(freeze(proxy));
    return () => {
      listeners = listeners.filter((l) => l !== cb);
    };
  };

  return proxy;
};
