import React from 'react'

export default function DefaultProps(props) {
  return (
    <div>
      <h1>Hello : {props.name}</h1>
    </div>
  )
}

DefaultProps.defaultProps = {
    name : "Default",
}
