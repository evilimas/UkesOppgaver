import { prop, map, filter, join, compose, trim, split, pipe } from "./helpers.ts";

interface User {
  name: string;
  email: string;
}

const users: User[] = [
  { name: "   anne   bErg  ", email: "anne.berg@example.com" },
  { name: "karl hansen", email: "karl.hansen[at]example.com" },
  { name: "   LISA iversen", email: "lisa.iversen@example.com" },
  { name: "Tore Tønnessen", email: "tore@example.com" },
  { name: " eva    nordmann", email: "eva.nordmann@example.com" },
  { name: " jonas    løvås", email: "jonas.lovaas.example.com" },
];

const trace = <T>(label: string) => (x: T): T => {
  console.log(label, x);
  return x;
};

const isValidEmailFunc = (user: User): boolean => user.email.includes("@");

const toUpperCase = (text:string) => text.toLocaleUpperCase();
const toLowerCase = (text:string) => text.toLocaleLowerCase();
const charAt = (index:number) => (text:string) => text.charAt(index);
const slice = (index:number) => (text:string) => text.slice(index);

const fixCase = map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
// const fixCase = (word: string) =>
//   compose(
//     ([f, r]) => f + r,
//     ([first, rest]) => [first.toUpper(), rest.toLower()],
//     (s: string) => [s.charAt(0), s.slice(1)]
//   )(word);

const toTitleCaseFunc = pipe(
  trim,
  split(/\s+/),
  fixCase,
  join(" ")
);

const formatUsersFunctional = (user: User): string =>
  `${toTitleCaseFunc(user.name)} <${user.email}>`;

// const filteredUsers = map(formatUsersFunctional)

const processUsersPipe = pipe(
  filter<User>(isValidEmailFunc),
  map(formatUsersFunctional),
  join(", ")
);

type ProcessFunction = (user: User[]) => string;
const processUsersCompose: ProcessFunction = compose(
  trace("4"),
  join(", "),
  trace("3"),
  map(formatUsersFunctional),
  trace("2"),
  filter<User>(isValidEmailFunc),
  trace("1")
);
console.log(processUsersPipe(users));
console.log(processUsersCompose(users));

export {
  isValidEmailFunc,
  toTitleCaseFunc,
  formatUsersFunctional,
  processUsersPipe,
  processUsersCompose,
};

export type { User };
