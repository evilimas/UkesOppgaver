interface User {
  name: string;
  email: string;
}

type IsValidEmail = (email: string) => boolean;
const isValidEmail: IsValidEmail = (email) => email.includes('@');

const trim = (text:string) => text.trim();

type ToTitleCase = (name: string) => string;
const toTitleCase: ToTitleCase = (name) =>
  name
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

type FormatUser = (user: User) => string;
const formatUser: FormatUser = (user) => ${toTitleCase(user.name)} <${user.email}>;


function compose<T, U, V>(f: (u: U) => V, x: (t: T) => U): (t: T) => V {
  return (t: T) => f(x(t));
}

type FilterValidUsers = (users: User[]) => User[];
const filterValidUsers: FilterValidUsers = users =>
  users.filter(user => isValidEmail(user.email));

type MapUsersToString = (users: User[]) => string[];
const mapUsersToString: MapUsersToString = users =>
  users.map(formatUser);

type JoinUserStrings = (entries: string[]) => string;
const joinUserStrings: JoinUserStrings = entries =>
  entries.join(", ");

type ProcessUsers = (users: User[]) => string;
const processUsers: ProcessUsers = compose(
  joinUserStrings,
  compose(
    mapUsersToString,
    filterValidUsers
  )
);
const users: User[] = [
  { name: "   anne   bErg  ", email: "anne.berg@example.com" },
  { name: "karl hansen", email: "karl.hansen[at]example.com" },
  { name: "   LISA iversen", email: "lisa.iversen@example.com" },
  { name: "Tore Tønnessen", email: "tore@example.com" },
  { name: " eva    nordmann", email: "eva.nordmann@example.com" },
  { name: " jonas    løvås", email: "jonas.lovaas.example.com" }
];

console.log(processUsers(users));