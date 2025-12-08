import React, { useEffect, useRef, useState } from 'react'
import api from '../axios/api'

function UploadedPdfs() {
 
    const [files,setFiles]=useState([]);
    const [answer,setAnswer]=useState();
    const [selectedfile,setSelectedfile]=useState(null);
    const questionRed =useRef();
    const [loading,setLoading]=useState(false);

    const getAnswer = async ()=>{
        setLoading(true);
        setAnswer();
        const PenecoleId = selectedfile.PenecoleId;
        const question = questionRed.current.value;

        try {
          
            const res = await api.post('/pdf/sendprompt',{PenecoleId , question});
            console.log(res.data.answer);
            setAnswer(res.data.answer);
            setLoading(false);
        } catch (error) {
            
        }
    }


    useEffect(()=>{
        const getfiles= async ()=>{
            const res=await api.get('/files/getall');
            setFiles(res.data.data.files);
            console.log(res.data.data.files)
        }
        getfiles();
    },[])
 return (
  <div
    style={{
      maxWidth: "500px",
      margin: "40px auto",
      padding: "24px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      fontFamily: "Inter, sans-serif"
    }}
  >
    <h2
      style={{
        fontSize: "20px",
        marginBottom: "16px",
        fontWeight: "600",
        color: "#222",
        textAlign: "center"
      }}
    >
      PDF Q&A
    </h2>

    <select
      name="file"
      id="file"
      onChange={(e) => {
        const file = files.find((f) => f._id === e.target.value);
        setSelectedfile(file);
        setAnswer();
      }}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        background: "#fff",
        fontSize: "14px",
        outline: "none",
        marginBottom: "20px",
      }}
    >
      <option>Select your PDF</option>
      {files.map((file) => (
        <option key={file._id} value={file._id}>
          {file.FileName}
        </option>
      ))}
    </select>

    {selectedfile && (
      <>
        <label
          htmlFor="prompt"
          style={{
            display: "block",
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: "500",
            color: "#444",
          }}
        >
          Enter your Question
        </label>

        <input
          type="text"
          id="prompt"
          ref={questionRed}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "14px",
            outline: "none",
            marginBottom: "16px",
          }}
        />
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
      marginBottom: "16px",
      fontSize: "14px",
      color: "#444",
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

    <span>Analysing document…</span>

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

        {answer && (
          <p
            style={{
              background: "#f8f8f8",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #eee",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#333",
              marginBottom: "18px"
            }}
          >
            {answer}
          </p>
        )}

        <button
          onClick={getAnswer}
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
            transition: "0.2s",
          }}
        >
          Get Answer
        </button>
      </>
    )}
  </div>
);

}

export default UploadedPdfs