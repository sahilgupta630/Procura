# SRIC Compass

A sophisticated AI-powered chatbot system designed for the SRIC (Sponsored Research & Industrial Consultancy) website. This tool assists faculty and staff by providing accurate, context-aware responses regarding complex purchase and procurement documents, frameworks, and GFR guidelines.

## 🚀 Features

*   **RAG (Retrieval-Augmented Generation)**: Utilizes advanced RAG techniques to provide answers grounded strictly in official SRIC documents.
*   **Intelligent Querying**: Powered by Llama 3.3 (via Groq) for high-performance natural language understanding and generation.
*   **Vector Search**: Uses FAISS and Google Gemini Embeddings for efficient and semantic document retrieval.
*   **Conversation Memory**: Maintains context across multiple turns of conversation for a natural chat experience.
*   **Source Citation**: clearly cites source documents and pages for every answer provided.
*   **Secure**: Designed with privacy in mind, ensuring sensitive internal documents are processed securely.

## 🛠️ Tech Stack

*   **Backend**: Python, FastAPI
*   **AI/ML**: LangChain, Groq (Llama 3.3), Google Gemini (Embeddings), FAISS
*   **Frontend**: React, TypeScript, Vite
*   **Deployment**: Docker support included

## 📋 Prerequisites

*   Python 3.9+
*   Node.js 16+
*   API Keys:
    *   `GEMINI_API_KEY`: For generating embeddings.
    *   `GROQ_API_KEY`: For the LLM inference.

## ⚡ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/sahilgupta630/SRIC-Compass.git
    cd SRIC-Compass
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    python -m venv venv
    # Windows
    venv\Scripts\activate
    # Linux/Mac
    # source venv/bin/activate
    
    pip install -r requirements.txt
    ```

3.  **Environment Configuration**
    Create a `.env` file in the `backend/` directory:
    ```env
    GEMINI_API_KEY=your_gemini_key_here
    GROQ_API_KEY=your_groq_key_here
    ```

4.  **Frontend Setup**
    ```bash
    cd ../
    npm install
    ```

## 🏃‍♂️ Running the Application

**Run Backend:**
```bash
cd backend
python api.py
# Server runs at http://localhost:8000
```

**Run Frontend:**
```bash
# In the root directory
npm run dev
# App runs at http://localhost:5173
```

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
