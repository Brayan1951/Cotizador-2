import React from 'react'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function HomePage() {
  return (
    <main>
      <div className="row">

    <Navbar />
    
    <Outlet />
      </div>
    </main>
    
  )
}
