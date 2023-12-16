import React from 'react'

export default function Hero(props) {
    if(props.heroName === 'Joker') {
        throw new Error("JOKER IS NOT A HERO");
    }
  return (
    <div>
      <h1>{props.heroName}</h1>
    </div>
  )
}
