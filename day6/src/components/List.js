import React from 'react'


function Display(props) {
    return (
        <h1>{props.name}</h1>
    )
}

export default function List() {
    const name = ['hi' , 'hello' , 'welcome' , 'avlothan'];
    const stname = name.map((val) => <Display name = {val} />)

  return (
    <div>
        {stname}
    </div>
  )
}
