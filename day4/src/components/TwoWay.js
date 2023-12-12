import React, { useState } from 'react'

export default function TwoWay() {
    const [name , setName] = useState("");
    const changename = (event) => setName(event.target.value);
  return (
    <div>
      <input onChange={changename} value={name}></input>
      <p>The Name Is {name}</p>
    </div>
  )
}
