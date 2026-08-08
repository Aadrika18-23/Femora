import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai

load_dotenv()

app = FastAPI()

# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise RuntimeError("GEMINI_API_KEY is missing from .env")

client = genai.Client(api_key=api_key)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    return {"message": "Femora backend is running"}


@app.get("/health")
def health():
    return {"status": "healthy"}


@app.get("/test-ai")
def test_ai():
    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents="Say hello from Eera, the Femora AI assistant."
    )

    return {
        "response": response.text
    }


@app.post("/ai/chat")
def ai_chat(request: ChatRequest):

    prompt = f"""
You are EERA, the AI health-support assistant inside Femora,
a women's health platform.

Your role:
- Give clear, supportive women's-health information.
- Ask relevant follow-up questions when necessary.
- Never claim to diagnose a medical condition.
- Encourage professional medical care when symptoms may require it.
- Keep responses concise and easy to understand.
- Do not invent medical facts.

User message:
{request.message}
"""

    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents=prompt
    )

    return {
        "response": response.text
    }