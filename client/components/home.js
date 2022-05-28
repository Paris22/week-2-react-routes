import React from 'react'
import { Link } from 'react-router-dom'
import Header from './header'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {/* add your routes here */}
          <Link to="/dashboard/"> Go To Dashboard</Link>
          <Link to="/dashboard/main"> Go To Main</Link>
          <Link to="/dashboard/profile/:user"> Go To User Profile</Link>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
