import fs from "fs-extra";

export class FileSystem {
  async ensureFolder(path: string) {
    await fs.ensureDir(path);
  }

  async writeFile(path: string, content: string) {
    await fs.outputFile(path, content);
  }
}
