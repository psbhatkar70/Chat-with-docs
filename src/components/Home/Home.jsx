import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    const handlepdfupload=()=>{
        navigate('/uploadpdf')
    }

    const handlepdfuploaded=()=>{
        navigate('/uploadedpdfs')
    }
    
    const handleabout=()=>{
        navigate('/about');
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
  }}
>
  <button
    onClick={handlepdfupload}
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      background: "#fff",
      color: "#000",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s",
    }}
    onMouseEnter={(e) => (e.target.style.background = "#f5f5f5")}
    onMouseLeave={(e) => (e.target.style.background = "#fff")}
  >
    Upload PDF
  </button>

  <button
    onClick={handlepdfuploaded}
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      background: "#fff",
      color: "#000",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s",
    }}
    onMouseEnter={(e) => (e.target.style.background = "#f5f5f5")}
    onMouseLeave={(e) => (e.target.style.background = "#fff")}
  >
    Explore your pre-uploaded PDF
  </button>
   <button
    onClick={handleabout}
    style={{
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      background: "#fff",
      color: "#000",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s",
    }}
    onMouseEnter={(e) => (e.target.style.background = "#f5f5f5")}
    onMouseLeave={(e) => (e.target.style.background = "#fff")}
  >
    About this project
  </button>
</div>



  )
}

export default Home