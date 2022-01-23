import { User } from "@/models/User";

const users: Array<User> = [
  new User("123", "Harry"),
  new User("456", "Thomas"),
  new User("789", "Luka"),
  new User("781", "Blub"),
];
export async function getAllUsers(): Promise<Array<User>> {
  return Promise.resolve(users);
}
