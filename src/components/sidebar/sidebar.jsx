import React from 'react'
import { SidebarHeader, SidebarProfice, SidebarNav } from './com'


function sidebar() {
  return (
    <div className='w-64 border-r border-border bg-background flex flex-col'>
      < SidebarHeader />
      < SidebarNav />
      < SidebarProfice />
   
    </div>
  )
}

export default sidebar
