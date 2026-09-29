import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import {Button as ShadCNButton} from '../components/ui/button'
function Home() {
  return (
    <div>
        Home
      <Card content={"Card1"}/>
      <Card content={"Card 2"}/>
      <ShadCNButton>OK</ShadCNButton>
      <ShadCNButton variant='outline'>cansel</ShadCNButton>
    </div>
  )
}

export default Home
