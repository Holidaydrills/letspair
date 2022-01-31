import { Lane } from "@/models/Lane";

export async function addNewLane(): Promise<Lane> {
  return Promise.resolve(new Lane("123"));
}
