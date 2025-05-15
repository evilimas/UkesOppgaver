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

const toTitleCaseFunc = compose(
    trim,
    split(/\s+/),
    map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()),
    join(" "))

    // (name: string): string =>
    //     .trim()
    //     .split(/\s+/)
    //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    //     .join(" ");

const formatUsersFunctional = (user: User): string => 
    `${toTitleCaseFunc(user.name)} <${user.email}>`;


const processUsers = compose(filter<User>(user => isValidEmailFunc(user.email)))
console.log(processUsers(users))
export { isValidEmailFunc , toTitleCaseFunc, formatUsersFunctional }