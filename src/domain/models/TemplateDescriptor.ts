export interface TemplateFile {
  path: string;
  content: string;
}

export interface TemplateDescriptor {
  id: string;
  name: string;
  category: string;
  files: TemplateFile[];
  folders: string[];
}
