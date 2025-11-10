import React, { useState } from 'react'
import EfficiencySpark from './EfficiencySpark.jsx'

export default function Dashboard(){
  const [perf] = useState({eff:13.4, dollars:78.2})
  return (
    <div className="card">
      <h3>Performance</h3>
      <div className="eff-row">
        <div>
          <div className="eff-large">{perf.eff}%</div>
          <div className="small">Dollars per hour</div>
          <div style={{fontWeight:700}}>${perf.dollars.toFixed(2)}</div>
        </div>
        <EfficiencySpark />
      </div>
      <div style={{height:12}} />
      <h4>Resources</h4>
      <ul>
        <li><a href="https://www.fmcdealer.dealerconnection.com/">Ford Login</a></li>
        <li><a href="https://www.motorcraftservice.com/">Motorcraft Service</a></li>
        <li><a href="https://my.alldata.com/ip">Alldata Login</a></li>
      </ul>
    </div>
  )
}
