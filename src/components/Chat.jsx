import React, { useState, useRef, useEffect } from 'react'
export default function Chat({defaultWelcome}){
  const [messages, setMessages] = useState(()=>{ const s = localStorage.getItem('tass_chat'); return s?JSON.parse(s):[{role:'assistant', text: defaultWelcome || 'Hello!'}] })
  const [input, setInput] = useState('')
  const ref = useRef()
  useEffect(()=> localStorage.setItem('tass_chat', JSON.stringify(messages)), [messages])
  useEffect(()=> { if(ref.current) ref.current.scrollTop = ref.current.scrollHeight }, [messages])
  function send(){ if(!input.trim()) return; setMessages(m=>[...m,{role:'user', text:input}]); setInput(''); setTimeout(()=> setMessages(m=>[...m,{role:'assistant', text:'Demo reply: check torque specs and labor times.'}]),600) }
  return (
    <div className="chat-card card">
      <div className="chat-messages" ref={ref}>
        {messages.map((m,i)=>(<div key={i} className={m.role==='user'? 'msg user' : 'msg bot'}>{m.text}</div>))}
      </div>
      <div style={{display:'flex',gap:8,marginTop:8}}>
        <input className="input" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask the assistant..." />
        <button className="btn" onClick={send}>Send</button>
      </div>
    </div>
  )
}
