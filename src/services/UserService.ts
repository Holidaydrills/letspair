import { Person } from "@/models/Person";

const people: Array<Person> = [
  new Person("123", "Harry"),
  new Person("456", "Thomas"),
  new Person("789", "Luka"),
];
export function getPeople(): Array<Person> {
  return people;
}
