import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

export default function Navigate(props) {
  const navigate = useNavigate();
  const login = () => {
    navigate('/login');
  }
  const signup = () => {
    navigate('/Signup');
  }
  return (
    <div>
        <button onClick={login}>Login</button>
        <button onClick={signup}>Signup</button>
    </div>
  )
}
