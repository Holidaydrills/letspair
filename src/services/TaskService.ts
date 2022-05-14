import { Task } from "@/models/Task";

const tasks: Array<Task> = [
  new Task("123", "Important task 1", 100),
  new Task("456", "Important task 2", 200),
  new Task("789", "Important task 3", 300),
  new Task("781", "Important task 4", 400),
];
export async function getAllTasks(): Promise<Array<Task>> {
  return Promise.resolve(tasks);
}
