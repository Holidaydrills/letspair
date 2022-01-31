import { Task } from "./Task";
import { User } from "./User";

export class Lane {
  public id!: string;
  public users?: Array<User>;
  public tasks?: Array<Task>;
  constructor();
  constructor(id: string);
  constructor(id?: string, users?: Array<User>, tasks?: Array<Task>) {
    this.users = users;
    this.tasks = tasks;
  }
}
