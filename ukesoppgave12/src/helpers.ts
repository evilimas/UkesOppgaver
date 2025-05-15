export const prop =
  <T, K extends keyof T>(key: K) =>
  (obj: T): T[K] =>
    obj[key];
export const map =
  <T, U>(fn: (value: T) => U) =>
  (array: T[]): U[] =>
    array.map(fn);
export const filter =
  <T>(fn: (value: T) => boolean) =>
  (array: T[]): T[] =>
    array.filter(fn);
export const join =
  (sep: string) =>
  (array: string[]): string =>
    array.join(sep);
export const compose =
  <T>(...fns: Array<(x: T) => T>) =>
  (x: T) =>
    fns.reduceRight((v, f) => f(v), x);
export const trim = 
    (str: string): string => str.trim();
export const split = 
    (str: string) => (sep: string): string[] => str.split(sep);