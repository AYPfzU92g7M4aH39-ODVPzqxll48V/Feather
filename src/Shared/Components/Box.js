import React from 'react'

import './Box.css';

const Box = props => {
  return (
    <div className={`box ${props.className}`} style={props.style}>
        {props.children}
    </div>
  )
}

export default Box