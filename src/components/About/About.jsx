import React from 'react';
import './About.css'; 
import architectureDiagram from './Files/Architecture.png';
function About() {
  return (
    <div className="about-container">
      <div className="content-wrapper">

        {/* --- 1. HEADER --- */}
        <header className="about-header">
          <h1>ChatWithDocs</h1>
          <p className="subtitle">Enterprise-Grade Retrieval Augmented Generation (RAG) System</p>

          <div className="tags">
            <span className="tag">AI-Native</span>
            <span className="tag">Vector Search</span>
            <span className="tag">Polyglot Persistence</span>
          </div>
        </header>

        <hr className="divider" />

        {/* --- 2. PROBLEM & SOLUTION --- */}
       <section className="section">
  <h2>01. The Concept</h2>

  <div className="grid-2">
    <div className="card">
      <h3>The Problem</h3>
      
        <ul>
          <li>Most AI models can’t handle long PDFs and miss important details or mix things up.</li>
          <li>They forget the PDF content once the chat resets — no long-term memory of your files.</li>
          <li>They can’t access your private or offline documents directly.</li>
          <li>This leads to inaccurate answers, especially with technical, legal, or research-heavy PDFs.</li>
        </ul>
   
    </div>

    <div className="card highlight-card">
      <h3>The Solution</h3>
      
        <ul>
          <li>We break your PDF into meaningful chunks and store them as a searchable knowledge base.</li>
          <li>When you ask a question, only the most relevant pieces are retrieved for the AI.</li>
          <li>The AI doesn’t need to “remember” anything — it always fetches fresh, accurate info.</li>
          <li>You get fast, precise answers with full privacy and reliability.</li>
        </ul>
      
    </div>
  </div>
</section>


        {/* --- 3. ARCHITECTURE --- */}
        <section className="section">
          <h2>02. System Architecture</h2>

          <p className="section-desc">
            The system utilizes a hybrid microservices pattern, orchestrating node-based ingestion with Pythonic vector logic.
          </p>

          <div className="architecture-visual">
            <div className="image-placeholder">
              {/* ------------------------------- */}
              {/* PLACEHOLDER FOR YOUR DIAGRAM */}
              {/* ------------------------------- */}
              <img src={architectureDiagram} className="architecture-img" alt="ChatWithDocs RAG Architecture" />
              <div className="placeholder-box"></div>
              <p className="caption">Figure 1.0: End-to-End RAG Data Pipeline</p>
            </div>
          </div>
        </section>

        {/* --- 4. TECH STACK --- */}
        <section className="section">
          <h2>03. Technology Stack</h2>

          <div className="table-container">
            <table className="tech-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Technology</th>
                  <th>Role & Responsibility</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td><strong>Frontend</strong></td>
                  <td>React.js + Vite</td>
                  <td>SPA Architecture, State Management, Optimistic UI Updates</td>
                </tr>

                <tr>
                  <td><strong>Backend</strong></td>
                  <td>Node.js + Express</td>
                  <td>REST API, Middleware, Business Logic Orchestration</td>
                </tr>

                <tr>
                  <td><strong>AI Engine</strong></td>
                  <td>Gemini 2.5 Flash</td>
                  <td>Thinking Model for context-aware inference</td>
                </tr>

                <tr>
                  <td><strong>Vector DB</strong></td>
                  <td>Pinecone</td>
                  <td>High-dimensional Vector Storage with HNSW Indexing</td>
                </tr>

                <tr>
                  <td><strong>Primary DB</strong></td>
                  <td>MongoDB</td>
                  <td>Metadata, User Sessions, File History</td>
                </tr>

                <tr>
                  <td><strong>Embedding</strong></td>
                  <td>Text-Embedding-004</td>
                  <td>768-dimensional vector generation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- 5. Engineering Flow --- */}
        <section className="section">
          <h2>04. Engineering Mechanics</h2>

          <div className="flow-container">

            {/* Ingestion */}
            <div className="flow-step">
              <div className="icon-box-minimal"></div>

              <div className="flow-content">
                <h3>Ingestion Engine (Upload)</h3>
                <ul>
                  <li><strong>Extraction:</strong> Binary PDF is parsed into raw text strings via <code>pdf-parse</code>.</li>
                  <li><strong>Recursive Chunking:</strong>Text is split into 1000-character segments with a 200-character overlap to preserve semantic context across boundaries.</li>
                  <li><strong>Vectorization:</strong>Each chunk is converted into a 768-dimensional floating-point vector using Google's embedding model.</li>
                  <li><strong>Isolation:</strong>Vectors are upserted to a unique Pinecone namespace (uuid) to ensure data isolation.</li>
                </ul>
              </div>
            </div>

            {/* Inference */}
            <div className="flow-step">
              <div className="icon-box-minimal"></div>

              <div className="flow-content">
                <h3>Inference Engine (Chat)</h3>
                <ul>
                  <li><strong>Query Embedding:</strong> User question is converted into a vector (RETRIEVAL_QUERY task type).</li>
                  <li><strong>Semantic Search:</strong>A Cosine Similarity search runs against the specific file namespace to retrieve the top 5 <code>topK=5</code> most relevant text chunks.</li>
                  <li><strong>Context Injection:</strong>Retrieved chunks are appended to a strict system prompt ("Answer using ONLY this context").</li>
                  <li><strong>Generation:</strong>Gemini 2.5 Flash synthesizes the final answer citing the provided facts.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>
        {/* --- 5. API REFERENCE --- */}
        <section className="section">
          <h2>05. API Reference</h2>
          <div className="api-grid">
            
            {/* Endpoint 1 */}
            <div className="api-card">
              <div className="api-header">
                <span className="method post">POST</span>
                <code className="endpoint">/api/upload</code>
              </div>
              <p className="api-desc">Ingests a PDF file into the RAG pipeline.</p>
              <div className="api-details">
                <div className="detail-row">
                  <span className="label">Payload</span>
                  <span className="value">multipart/form-data (PDF)</span>
                </div>
                <div className="detail-row">
                  <span className="label">Returns</span>
                  <span className="value">fileId (UUID), metadata</span>
                </div>
              </div>
            </div>

            {/* Endpoint 2 */}
            <div className="api-card">
              <div className="api-header">
                <span className="method get">GET</span>
                <code className="endpoint">/api/my-files</code>
              </div>
              <p className="api-desc">Retrieves the user's document history from MongoDB.</p>
              <div className="api-details">
                <div className="detail-row">
                  <span className="label">Payload</span>
                  <span className="value">None (Auth Header)</span>
                </div>
                <div className="detail-row">
                  <span className="label">Returns</span>
                  <span className="value">Array of File Objects</span>
                </div>
              </div>
            </div>

            {/* Endpoint 3 */}
            <div className="api-card">
              <div className="api-header">
                <span className="method post">POST</span>
                <code className="endpoint">/api/chat</code>
              </div>
              <p className="api-desc">Performs semantic search and generates an answer.</p>
              <div className="api-details">
                <div className="detail-row">
                  <span className="label">Payload</span>
                  <span className="value">{`{ question, fileId }`}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Process</span>
                  <span className="value">Embedding → Search → Inference</span>
                </div>
              </div>
            </div>

          </div>
        </section>

      {/* --- 6. OPTIMIZATION & CONSTRAINTS --- */}
        <section className="section">
          <h2>06. System Constraints & Optimization</h2>
          <p className="section-desc">
            Transparency regarding system limits and performance benchmarks is key to engineering trust.
          </p>
          
          <div className="specs-grid">
            <div className="spec-card">
              <div className="spec-header">
                <span>File Size</span>
              </div>
              <div className="spec-value">Max 10MB</div>
              <p className="spec-desc">Optimized for text-heavy PDFs approx. 150 pages.</p>
            </div>

            <div className="spec-card">
              <div className="spec-header">
                <span>Concurrency</span>
              </div>
              <div className="spec-value">In-Memory</div>
              <p className="spec-desc">Ingestion is synchronous. Files containing more than500 pages require stream refactoring.</p>
            </div>

            <div className="spec-card">
              <div className="spec-header">
                <span>Latency</span>
              </div>
              <div className="spec-value">~1.5s TTFB</div>
              <p className="spec-desc">Average time-to-first-byte for RAG inference.</p>
            </div>

            <div className="spec-card">
              <div className="spec-header">
                <span>Retention</span>
              </div>
              <div className="spec-value">Ephemeral</div>
              <p className="spec-desc">Vector Namespaces can be flushed without metadata loss.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>07. Security & Privacy</h2>
          <div className="security-box">
            <div className="security-icon-large">
            </div>
            <div className="security-content">
              <h3>Namespace Isolation Architecture</h3>
              <p>
                Privacy is enforced via strict <strong>Namespace Isolation</strong>. Unlike shared-index systems, 
                every document exists in its own mathematically isolated namespace. 
              </p>
              <p className="security-note">
                A user's query is strictly bounded to the specific namespace ID they are authorized to access, 
                making <strong>Cross-Tenant Data Leakage</strong> impossible at the database level.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <footer className="about-footer">
          <div className="profile">
            <h3>Designed & Engineered by <strong>Pravin Bhatkar</strong></h3>
            <p>Full Stack AI Engineer</p>
          </div>

          <div className="social-links">

            <a className="social-btn" href="https://github.com/psbhatkar70">
              GitHub →
            </a>

            <a className="social-btn" href="https://www.linkedin.com/in/pravin-bhatkar-01547631a/">
              LinkedIn →
            </a>

            {/* <a className="social-btn primary" href="#">
              Portfolio →
            </a> */}

          </div>
        </footer>

      </div>
    </div>
  );
}

export default About;
