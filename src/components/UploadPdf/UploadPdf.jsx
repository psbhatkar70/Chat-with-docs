import axios from 'axios';
import React, { useState } from 'react'
import api from '../axios/api';
import { useNavigate } from 'react-router-dom';

function UploadPdf() {
const [loading,setLoading]=useState(false);
const [FileName,setfilename]=useState(null);
const [error,setError]=useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
    const navigate =useNavigate();



  const handleFileChange = (event) => {
    setError();
    const file = event.target.files[0];
    setfilename(file.name);
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      console.log("File selected:", file.name);
    } else {
      setSelectedFile(null);
      alert("Please select a valid PDF file.");
    }
  }

  const handlesubmitpdf= async ()=>{
    setLoading(true)
     if (!selectedFile) return alert("Please select a PDF first");
    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("FileName",FileName);
    try {
        console.log(FileName);
       const res = await api.post('/pdf/pdfparse', formData);

      console.log("Response:", res.data);
      setLoading(false)
      alert("PDF uploaded successfully");
      navigate('/home');


    } catch (error) {
        console.log(error)
        setError(error);
        setLoading(false);
    }
  }
    
  return (
  <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", 
    gap: "16px",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "0 16px",
    fontFamily: "Inter, sans-serif",
  }}
>
  <input
    type="file"
    accept=".pdf"
    onChange={handleFileChange}
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      background: "#fff",
      fontSize: "14px",
      outline: "none",
      cursor: "pointer",
    }}
  />

  {selectedFile && (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center",
      }}
    >
      <p
        style={{
          background: "#f8f8f8",
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #eee",
          width: "100%",
          fontSize: "14px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Selected file: {selectedFile.name}
      </p>
       {loading && (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #eee",
      background: "#fafafa",
      fontSize: "14px",
      color: "#555",
      textAlign: "center",
      width: "100%",
      maxWidth: "400px",
      margin: "12px auto",
    }}
  >
    <div
      style={{
        width: "16px",
        height: "16px",
        border: "2px solid #ddd",
        borderTop: "2px solid #000",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
      }}
    />
    <span>File is uploading, it may take some time…</span>

    <style>
      {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
)}

{error && (
  <div
    style={{
      width: "100%",
      maxWidth: "400px",
      margin: "12px auto",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #f5c6cb",
      background: "#f8d7da",
      color: "#721c24",
      fontSize: "14px",
      textAlign: "center",
    }}
  >
    Error uploading file
  </div>
)}

      <button
        onClick={handlesubmitpdf}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          background: "#000",
          color: "#fff",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.background = "#222")}
        onMouseLeave={(e) => (e.target.style.background = "#000")}
      >
        Submit
      </button>
    </div>
  )}
</div>

  )
}

export default UploadPdf