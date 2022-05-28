import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title">
            Main
          </div>
          <Link to="/dashboard"> Go To Root</Link>
          <Link to="/dashboard/profile/c018ce6d-3337-477a-8e6a-3f09667a10ff"> Go To Profile</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main