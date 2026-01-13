
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Any
from rag_engine import RAGEngine

app = FastAPI(title="BoughtyBOT API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development, allow all. In production, restrict this.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize RAG Engine
rag_engine = RAGEngine()
rag_engine.initialize()

class Message(BaseModel):
    """
    Represents a single message in the conversation history.
    """
    role: str
    content: str
    
class ChatRequest(BaseModel):
    """
    Schema for an incoming chat request.
    """
    message: str
    history: Optional[List[Message]] = []

class Source(BaseModel):
    """
    Represents a source document citation.
    """
    content: str
    metadata: dict

class ChatResponse(BaseModel):
    """
    Schema for the chat response including the answer and source citations.
    """
    answer: str
    sources: List[Source]

@app.get("/")
def health_check():
    """
    Health check endpoint to verify API is running.
    """
    return {"status": "ok", "message": "BoughtyBOT API is running"}

@app.post("/chat", response_model=ChatResponse)
def chat_endpoint(request: ChatRequest):
    """
    Process a chat request, retrieving context and generating an answer.

    - **message**: The user's query string.
    - **history**: Optional list of previous conversation turns.
    """
    result = rag_engine.query(request.message, [msg.dict() for msg in request.history])
    return result

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
