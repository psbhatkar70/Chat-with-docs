import React, { useState } from 'react'
import { useRef } from 'react'
import api from '../axios/api'
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const nameRef =useRef(null);
    const emailRef =useRef(null);
    const passwordRef =useRef(null);
    const confirmPasswordRef =useRef(null);
    const navigate = useNavigate();
    const handlegotologin= ()=>{
        navigate('/login')
    }
    const handleSignup =async ()=>{
        console.log("hello from here")
        try {
          setLoading(true);
          setError(false);
            console.log("1st")
            const name=nameRef.current.value;
            const email=emailRef.current.value;
            const password=passwordRef.current.value;
            const confirmPassword=confirmPasswordRef.current.value;
            console.log(name + email + password + confirmPassword)
            if(password !== confirmPassword) {
                console.log("Passsword must match");
                setLoading(false);
                return;
            };
            const res = await api.post('/user/signup',{name , email , password , confirmPassword});
            localStorage.setItem('chat-with-docs-token', res.data.token);
            localStorage.setItem("chat-user", JSON.stringify(res.data.newUser));

            navigate('/home');
            console.log(res);
            setLoading(false);

        } catch (error) {
          setError(true);
            console.log(error)
            setLoading(false);

        }
    }

  const handleGuestLogin = async (e) => {
  e.preventDefault();
  setLoading(true)

  try {

    const res = await api.post('/user/login',{ email: "pravintest1@gmail.com", password: "Pass1234" });
    localStorage.setItem('chat-with-docs-token', res.data.token);
    localStorage.setItem("chat-user", JSON.stringify(res.data.user));
    navigate('/home');
    setLoading(false);
  } catch (error) {
    console.error("Guest login failed:", error);
    alert("Guest Login Failed. Please check console.");
    setLoading(false);
  }
};
 return (
  <>
    <div className="signup-container">

      <div className="signup-card">

        <h1 className="title">Sign Up</h1>

        <button className="login-btn" onClick={handlegotologin}>
          Log In
        </button>

        <div className="form-group">
          <label htmlFor="name">Enter your name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Enter your email</label>
          <input type="text" id="email" ref={emailRef} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Enter your Password</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" ref={confirmPasswordRef} />
        </div>

        {error && (
          <div className="error-box">
            Please ensure every field is filled, or the server may be down.
          </div>
        )}

        <button className="signup-btn" onClick={handleSignup}>
          Sign Up
        </button>
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

    <span>Signing in..</span>

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
        <button
  type="button" 
  onClick={handleGuestLogin}
  style={{
    marginTop: "1rem",
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#4f46e5", 
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem"
  }}
>
 
  Try Guest Login (Recruiters)
</button>

      </div>
    </div>

    <style>
      {`
        .signup-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fafafa;
          padding: 20px;
        }

        .signup-card {
          width: 100%;
          max-width: 420px;
          background: #fff;
          padding: 32px;
          border-radius: 14px;
          border: 1px solid #eaeaea;
          box-shadow: 0 4px 14px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .title {
          text-align: center;
          margin-bottom: 6px;
          font-size: 24px;
          font-weight: 600;
          color: #111;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        label {
          font-size: 14px;
          color: #444;
          font-weight: 500;
        }

        input {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fff;
          font-size: 15px;
          outline: none;
          transition: 0.2s;
        }

        input:focus {
          border-color: #000;
        }

        .signup-btn,
        .login-btn {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #fff;
          color: #000;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.25s;
        }

        .signup-btn:hover,
        .login-btn:hover {
          background: #f1f1f1;
        }

        .error-box {
          padding: 12px;
          border-radius: 8px;
          background: #ffe6e6;
          border: 1px solid #ffbdbd;
          color: #a33a3a;
          font-size: 14px;
          text-align: center;
        }

        @media (max-width: 480px) {
          .signup-card {
            padding: 24px;
          }

          .title {
            font-size: 22px;
          }
        }
      `}
    </style>
  </>
);

}

export default SignUp