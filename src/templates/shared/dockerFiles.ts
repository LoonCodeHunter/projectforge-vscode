import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const dockerFiles: TemplateDescriptor = {
  id: "shared-docker-files",
  name: "Shared Docker Files",
  category: "shared",
  folders: [],
  files: [
    {
      path: "Dockerfile",
      content: `FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
`
    },
    {
      path: "docker-compose.yml",
      content: `version: "3.9"
services:
  app:
    build: .
    ports:
      - "3000:3000"
`
    }
  ]
};
