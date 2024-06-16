import React, { useState } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username:"",
        password:"",
      })
    
      const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
      }
      const login = async () => {
        event.preventDefault();
        let responseData;
        await fetch('http://localhost:4000/login', {
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-type':'application/json',
          },
          body:JSON.stringify(formData)
        }).then((resp) => resp.json()).then((data) => responseData = data)
        if (responseData.success){
          localStorage.setItem('auth-token', responseData.token);
          window.location.replace(`/user/${formData.username}`);
        }else{
          alert(responseData.errors)
        }
      }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>

        <form onSubmit={login} >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={changeHandler}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={changeHandler}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              
              
            </label>
            
          </div>

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;