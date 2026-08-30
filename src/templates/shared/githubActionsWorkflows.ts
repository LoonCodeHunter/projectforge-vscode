import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const githubActionsWorkflows: TemplateDescriptor = {
  id: "shared-github-actions-workflows",
  name: "Shared GitHub Actions Workflows",
  category: "shared",
  folders: [".github/workflows"],
  files: [
    {
      path: ".github/workflows/ci.yml",
      content: `name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npm run build
      - run: npm test
`
    }
  ]
};
