import React from 'react'
import { useRef,useState } from 'react'
import api from '../axios/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loading,setLoading]=useState(false);
  const [error,setError] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const emailRef =useRef(null);
const passwordRef =useRef(null);
const navigate=useNavigate();
const handlegotoSignup=()=>{
    navigate('/')
}
    const handleLogin = async ()=>{
         try {
          setLoading(true);
          setError(false);
            console.log("1st")
            const email=emailRef.current.value;
            const password=passwordRef.current.value;
          
            const res = await api.post('/user/login',{ email , password });
            localStorage.setItem('chat-with-docs-token', res.data.token);
            localStorage.setItem("chat-user", JSON.stringify(res.data.user));

            console.log(res);
            navigate('/home');
            setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(true)
            console.log(error)
        }
    }
    
return (
  <>
    <style>{`
      .login-container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fafafa;
        padding: 20px;
      }

      .login-card {
        background: #fff;
        width: 100%;
        max-width: 380px;
        padding: 30px;
        border-radius: 14px;
        border: 1px solid #eaeaea;
        box-shadow: 0 4px 14px rgba(0,0,0,0.05);
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .login-title {
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 6px;
        color: #111;
      }

      .signup-btn {
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

      .signup-btn:hover {
        background: #f1f1f1;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .input-group label {
        font-size: 14px;
        color: #444;
        font-weight: 500;
      }

      .input-group input {
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background: #fff;
        font-size: 15px;
        outline: none;
        transition: 0.2s;
      }

      .input-group input:focus {
        border-color: #000;
      }

      .password-wrapper {
        position: relative;
      }

      .eye-btn {
        position: absolute;
        right: 12px;
        top: 10px;
        font-size: 18px;
        cursor: pointer;
      }

      .login-btn {
        width: 100%;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid #ddd;
        background: #000;
        color: white;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.25s;
        margin-top: 8px;
      }

      .login-btn:hover {
        background: #222;
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
        .login-card {
          padding: 24px;
        }

        .login-title {
          font-size: 22px;
        }
      }
    `}</style>

    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>

        <button className="signup-btn" onClick={handlegotoSignup}>
          Sign Up
        </button>

        <div className="input-group">
          <label htmlFor="email">Enter your email</label>
          <input type="text" id="email" ref={emailRef} />
        </div>

        <div className="input-group">
          <label htmlFor="password">Enter your Password</label>

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              ref={passwordRef}
            />

            <span
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
        </div>

        {error && <div className="error-box">Invalid email or password</div>}
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
        <button className="login-btn" onClick={handleLogin}>
          Log In
        </button>

      </div>
    </div>
  </>
);

}

export default Login