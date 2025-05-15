import { prop, map, filter, join, compose, trim, split }  from "./helpers.ts";

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

const isValidEmailFunc = (email: string): boolean => email.includes("@");

const toTitleCaseFunc = (name: string) => 
    name 
        .trim()
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

const formatUsersFunctional = (user: User): string => 
    `${toTitleCaseFunc(user.name)} <${user.email}>`;


// const processUsers = compose(
//     (users: User[]): User[] => 
//     users.filter((user) => isValidEmailFunc(user.email))
//         .map((user) => ({
//             ...user,
//             name: toTitleCaseFunc(user.name),
//         }));


export {isValidEmailFunc , toTitleCaseFunc, formatUsersFunctional}