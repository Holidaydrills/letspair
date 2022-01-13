import { Person } from "@/models/Person";

const people: Array<Person> = [
  new Person("123", "Harry"),
  new Person("456", "Thomas"),
  new Person("789", "Luka"),
  new Person("789", "Henry"),
];
export function getAllUsers(): Array<Person> {
  return people;
}
