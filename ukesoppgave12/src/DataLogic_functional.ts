import { prop, map, filter, join, compose, trim, split, pipe } from "./helpers";

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

const trace = (label: string) => (x: any) => {
  console.log(label, x);
  return x;
};

const isValidEmailFunc = (email: string): boolean => email.includes("@");

const toTitleCaseFunc = pipe(
  trim,
  split(/\s+/),
  map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()),
  join(" ")
);

const formatUsersFunctional = (user: User): string =>
  `${toTitleCaseFunc(user.name)} <${user.email}>`;

const filterValidEmail = filter<User>((user) => isValidEmailFunc(user.email));

// const filteredUsers = map(formatUsersFunctional)

const processUsersPipe = pipe(filterValidEmail, map(formatUsersFunctional), join(", "));

const processUsersCompose = compose(
  trace("4"),
  join(", "),
  trace("3"),
  map(formatUsersFunctional),
  trace("2"),
  filterValidEmail,
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
