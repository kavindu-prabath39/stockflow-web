import React from 'react'
import {Card as CommonCard } from '../../../components/Card'
import Button from '../../../components/Button'
import {Button as ShadCNButton} from '../../../components/ui/button'
function HomeCard() {
  return (
    <div>
  <CommonCard content={"Card 1"}/>
  <CommonCard content={"Card 2"}/>
      <Button/>
      <ShadCNButton>OK</ShadCNButton>
      <ShadCNButton variant='outline'>cansel</ShadCNButton>
    </div>
  )
}

export default HomeCard
