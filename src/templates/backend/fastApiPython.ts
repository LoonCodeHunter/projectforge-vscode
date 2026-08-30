import { TemplateDescriptor } from "../../domain/models/TemplateDescriptor";

export const fastApiPython: TemplateDescriptor = {
  id: "fastapi-python",
  name: "FastAPI Python Backend",
  category: "backend",
  folders: ["app"],
  files: [
    {
      path: "requirements.txt",
      content: `fastapi==0.111.0
uvicorn[standard]==0.30.0
`
    },
    {
      path: "app/main.py",
      content: `from fastapi import FastAPI

app = FastAPI(title="ProjectForge FastAPI Backend")

@app.get("/health")
async def health():
    return {"status": "ok", "service": "ProjectForge FastAPI"}
`
    },
    {
      path: "Dockerfile",
      content: `FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY app ./app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
`
    }
  ]
};
