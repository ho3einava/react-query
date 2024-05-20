import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='main'>
      
      <div className='notFound'>

      NotFound Page - 404 !!! <br/>
      <span className='message'>Click Her <Link to="/" style={{color:"#c1121f"}}>Home</Link> And Go to Home Page</span>
      </div>
      
      </div>
  )
}
