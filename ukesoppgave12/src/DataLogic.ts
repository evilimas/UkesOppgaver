// Input data

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

// Imperativ løsning

function isValidEmail(email: string): boolean {
  return email.includes("@");
}

function toTitleCase(name: string): string {
  const trimmed = name.trim();
  const words = trimmed.split(/\s+/);
  const titleCasedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return titleCasedWords.join(" ");
}

function formatUsersImperative(users: User[]): string {
  const result: string[] = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    if (!isValidEmail(user.email)) {
      continue;
    }

    const formattedName = toTitleCase(user.name);
    const entry = `${formattedName} <${user.email}>`;
    result.push(entry);
  }

  return result.join(", ");
}

// Eksempel på bruk
const output = formatUsersImperative(users);
console.log(output);

// Output:
// Anne Berg <anne.berg@example.com>, Lisa Iversen <lisa.iversen@example.com>,
// Tore Tønnessen <tore@example.com>, Eva Nordmann <eva.nordmann@example.com>

// hjelpefunksjoner

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

export { isValidEmail, toTitleCase, formatUsersImperative };
