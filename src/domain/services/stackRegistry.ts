import stacksJson from "../../config/stacks.json";

export class StackRegistry {
  getStacks() {
    return stacksJson;
  }

  getStackById(id: string) {
    return (stacksJson as any)[id];
  }

  getDefaultStack() {
    return stacksJson.web;
  }
}
