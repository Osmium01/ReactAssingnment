import React from 'react'
import './greet.css'

export const Greet = ({name}) => {
  return (<>
    <h1>Hey ! {name}</h1>

    <h2 className='ramji'>Welcome to LPU College</h2>
    <h3>Good work {name}</h3>
  </>
  );
}