import './App.css'
import  { BrowserRouter, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import { PrivateRoute, PublicRoute } from './components/RouteGuards/RouteGuards';
import Home from './components/Home/Home';
import UploadPdf from './components/UploadPdf/UploadPdf';
import UploadedPdfs from './components/UploadedPdfs/UploadedPdfs';
import About from './components/About/About';


function App() {

  return (
    <>
    
    <Routes>

       <Route 
          path="/" 
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          } 
        />
        
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } 
        />

        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/uploadpdf" 
          element={
            <PrivateRoute>
              <UploadPdf />
            </PrivateRoute>
          } 
        />

         <Route 
          path="/uploadedpdfs" 
          element={
            <PrivateRoute>
              <UploadedPdfs />
            </PrivateRoute>
          } 
        />

        <Route 
          path="/about" 
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          } 
        />

    </Routes>
   
    </>
  )
}

export default App
