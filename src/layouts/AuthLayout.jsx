import React from 'react'

function AuthLayout({children}) {
  return (
    <div className='flex min-h-screen bg-muted/50 items-center justify-center'>
      {children}
    </div>
  )
}

export default AuthLayout
