import React, { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard.jsx'
import Chat from './components/Chat.jsx'
import Login from './components/Login.jsx'
import './styles.css'

export default function App(){
  const [loggedIn, setLoggedIn] = useState(false)
  const [tab, setTab] = useState('dashboard')
  const [dark, setDark] = useState(()=> localStorage.getItem('tass_dark')==='1')

  useEffect(()=>{ document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('tass_dark', dark ? '1' : '0') }, [dark])

  if(!loggedIn) return <Login onLogin={()=>setLoggedIn(true)} />

  return (
    <div className="app">
      <header className="header">
        <div className="brand"><img src="/src/assets/logo.png" alt="logo" height="28" style={{verticalAlign:'middle'}}/> <span style={{marginLeft:8}}>Kunes | TASS TechAI</span></div>
        <div style={{marginLeft:'auto'}}>
          <label style={{display:'flex',alignItems:'center',gap:8}}>
            <input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)} /> Dark
          </label>
        </div>
      </header>

      <nav className="tabs">
        <button className={tab==='dashboard'?'active':''} onClick={()=>setTab('dashboard')}>Performance</button>
        <button className={tab==='diagnostics'?'active':''} onClick={()=>setTab('diagnostics')}>Diagnostics</button>
        <button className={tab==='resources'?'active':''} onClick={()=>setTab('resources')}>Resources</button>
        <button className={tab==='multipoint'?'active':''} onClick={()=>setTab('multipoint')}>Multipoint</button>
        <button className={tab==='admin'?'active':''} onClick={()=>setTab('admin')}>Admin</button>
      </nav>

      <main className="container">
        <div className="left">
          {tab==='dashboard' && <Dashboard />}
          {tab==='diagnostics' && <div className="card"><h3>Diagnostics</h3><p>VIN lookup & DTC guidance (FMCDealer available via login).</p></div>}
          {tab==='resources' && <div className="card"><h3>Resources</h3><p>Manage links in Resources tab.</p></div>}
          {tab==='multipoint' && <div className="card"><h3>Multipoint Inspection</h3><a href="https://app.fordpdl.com/12/login" target="_blank" rel="noreferrer"><button className="btn">Open Ford PDL</button></a></div>}
          {tab==='admin' && <div className="card"><h3>Admin</h3><p>Manage devices and settings (demo).</p></div>}
        </div>

        <aside className="right">
          <div className="card"><h4>Quick Links</h4><ul><li><a href="https://www.motorcraftservice.com" target="_blank" rel="noreferrer">Motorcraft Service</a></li></ul></div>
          <div className="card"><h4>Diagnostics Quick</h4><p>Search VIN or DTC.</p></div>
        </aside>
      </main>

      <div className="chat-panel">
        <Chat defaultWelcome="Welcome to TASS TechAI! Ask me about labor times, torque specs, and wiring." />
      </div>
    </div>
  )
}
