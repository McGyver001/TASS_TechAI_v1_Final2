import React from 'react'
export default function Login({onLogin}){
  return (
    <div className="login-screen">
      <div className="login-card">
        <img src="/src/assets/logo.png" alt="logo" style={{height:64}} />
        <h2>Kunes | TASS TechAI</h2>
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" type="password" />
        <button className="btn" onClick={onLogin}>Login (Demo)</button>
      </div>
    </div>
  )
}
