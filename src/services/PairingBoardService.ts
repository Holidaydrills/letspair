import { Lane } from "@/models/Lane";
import { v4 as uuidv4 } from "uuid";

export async function addNewLane(): Promise<Lane> {
  return Promise.resolve(new Lane(uuidv4()));
}
