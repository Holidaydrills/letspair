import { Task } from "@/models/Task";

const tasks: Array<Task> = [
  new Task("123", "Important task 1"),
  new Task("456", "Important task 2"),
  new Task("789", "Important task 3"),
  new Task("781", "Important task 4"),
];
export function getAllTasks(): Array<Task> {
  return tasks;
}
