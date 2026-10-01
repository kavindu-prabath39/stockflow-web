import React from 'react'
import { useNavigate } from 'react-router-dom'

import {Button} from '../ui/button'
function TopNav() {
    const navigate = useNavigate();




  return (
    <div className='flex items-center justify-between h-16 bg-background border-b border-border px-6 hover:cursor-pointer '>
     <div className='font-semibold text-shadow-accent-foreground' onClick={() => navigate('/')}>Stockflow</div> 
     <Button onClick={() => navigate('/login')}>Login</Button>
    </div>
  )
}

export default TopNav
