import { AppState, callbackFunction } from "./types";

const freeze = (state: AppState) =>
  Object.freeze(window.structuredClone(state));

interface StateWrapper {
  state: AppState;
  addChangeListener: (cb: callbackFunction) => () => void;
}

type ReactivityWrapper = (initialState: AppState) => StateWrapper;

const wrapWithReactivity: ReactivityWrapper = (initialState: AppState) => {
  let listeners: callbackFunction[] = [];
  const mutableAppState = window.structuredClone(initialState) as AppState;

  const proxy = new Proxy<AppState>(mutableAppState, {
    set: (target: any, name: string, value: callbackFunction) => {
      target[name] = value;
      const frozenSate = freeze(target);
      listeners.forEach((l) => l(freeze(frozenSate)));
      return true;
    },
  });

  const addChangeListener = (cb: callbackFunction) => {
    listeners.push(cb);
    cb(freeze(mutableAppState));
    return () => {
      listeners = listeners.filter((l) => l !== cb);
    };
  };

  return { state: proxy, addChangeListener };
};
export default wrapWithReactivity;
