import * as path from "node:path";

export function join(...segments: string[]) {
  return path.join(...segments);
}
