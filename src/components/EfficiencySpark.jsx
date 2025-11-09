import React, { useEffect, useState } from 'react'
export default function EfficiencySpark(){
  const [pts, setPts] = useState([30,32,34,36,38,40,42,44,46])
  useEffect(()=>{ const t=setInterval(()=> setPts(p=>{ const v=Math.max(10, Math.min(100, p[p.length-1] + (Math.random()*4-2))); return [...p.slice(1), Math.round(v)] }), 2000); return ()=>clearInterval(t) },[])
  const w=220,h=60,step=w/(pts.length-1)
  const path = pts.map((p,i)=> `${i===0?'M':'L'} ${i*step} ${h - (p/100)*(h-8)}`).join(' ')
  const fill = path + ` L ${w} ${h} L 0 ${h} Z`
  return (<svg viewBox={`0 0 ${w} ${h}`} width='220' height='60'><path d={fill} fill='rgba(0,120,215,0.12)' stroke='#007BFF' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/></svg>)
}
