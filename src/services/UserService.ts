import { User } from "@/models/User";

const users: Array<User> = [
  new User("123", "Harry", 100),
  new User("456", "Thomas", 200),
  new User("789", "Luka", 300),
  new User("781", "Blub", 400),
];
export async function getAllUsers(): Promise<Array<User>> {
  return Promise.resolve(users);
}
