import axios from "axios";


const api=axios.create({
  baseURL: 'https://chat-with-docs-backend.onrender.com/api/v1',
});

api.interceptors.request.use(function(config){
    const token = localStorage.getItem('chat-with-docs-token');

    if(token){
        config.headers['Authorization']='Bearer '+token;
    }
    return config;
    
},
function(error){
    if (error.response && error.response.status === 401) {
      console.log("Token expired or invalid. Logging out...");
     
      localStorage.removeItem('chat-with-docs-token');
      
      window.location.href = '/'; 
    }
    return Promise.reject(error);
});

export default api;