import React from 'react'
import { useSelector } from 'react-redux'

export default function TechnicalLevel() {

  const secondStepContent = useSelector(str => str.createAccountContent)

  console.log(secondStepContent)

  return (
    <div>
        
    </div>
  )
}
