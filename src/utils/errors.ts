export class ProjectForgeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProjectForgeError";
  }
}
