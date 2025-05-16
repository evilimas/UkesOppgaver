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
export const join = (sep: string) => (array: string[]): string => array.join(sep);
export const compose =
  (...fns: Array<(x: any) => any>) =>
    (x: any) =>
      fns.reduceRight((v, f) => f(v), x);
  
export const trim = (str: string): string => str.trim();

// export const split =
//   (str: string ) =>
//   (sep: string): string[] =>
//     str.split(sep);

export const split =
  (separator: string | RegExp) =>
    (value: string): string[] =>
      value.split(separator);

export const pipe =
  <T>(...fns: Array<(arg: any) => any>) =>
    (x: T) =>
      fns.reduce((v, f) => f(v), x);
