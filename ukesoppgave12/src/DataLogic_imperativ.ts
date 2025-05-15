// Input data

interface User {
  name: string;
  email: string;
}

const users = [
  { name: "   anne   bErg  ", email: "anne.berg@example.com" },
  { name: "karl hansen", email: "karl.hansen[at]example.com" },
  { name: "   LISA iversen", email: "lisa.iversen@example.com" },
  { name: "Tore Tønnessen", email: "tore@example.com" },
  { name: " eva    nordmann", email: "eva.nordmann@example.com" },
  { name: " jonas    løvås", email: "jonas.lovaas.example.com" },
] 
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
const outputEmail = isValidEmail(users[1].email);
console.log(outputEmail);
const output = formatUsersImperative(users);
console.log(output);




export { isValidEmail, toTitleCase, formatUsersImperative };
