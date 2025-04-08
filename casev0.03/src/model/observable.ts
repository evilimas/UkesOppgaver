import { AppState, callbackFunction } from "./types";

const freeze = (state: AppState) => Object.freeze(window.structuredClone(state))



export default (initialState: AppState) => {
  let listeners: callbackFunction[]  = [];

  const proxy = new Proxy(window.structuredClone(initialState), {
    set: (target: any, name: string, value: callbackFunction) => {
      target[name] = value;
      listeners.forEach((l) => l(freeze(proxy)));
      return true;
    },
  });

  proxy.addChangeListener = (cb: callbackFunction) => {
    listeners.push(cb);
    cb(freeze(proxy));
    return () => {
      listeners = listeners.filter((l) => l !== cb);
    };
  };

  return proxy;
};
