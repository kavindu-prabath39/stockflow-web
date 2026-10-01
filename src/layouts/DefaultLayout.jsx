import React from 'react'
import TopNav from '../components/top-nav/TopNav'
import Sidebar from '../components/sidebar/sidebar'

function DefaultLayout({children}) {
  return (
    <div className='flex flex-row min-h-screen'>
<Sidebar/>
      <div className='flex-1 bg-gray-300'>
          <TopNav/>
        <div className='p-6'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
