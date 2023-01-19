import React from 'react'

export const Greet = ({name}) => {
  return (<>
    <h1>Welcome to LPU</h1>
    <h3>{name}</h3>
    <h4>Assignment done by {name} 🙂</h4>
  </>
  )
}