import React from 'react'
import { useState } from 'react'

export default function StateFun() {
    const [carName , setCarName] = useState("lambo");
    const changeCar = () => setCarName("BMW");
    const [count , setCount] = useState(0);
    const Increment = () => setCount(count+1);
    const Decriment = () => setCount(count-1);
  return (
    <div>
      <h1>Car name : {carName} </h1>
      <button onClick={changeCar}>New Car</button>
      <h1>Counter : {count} </h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decriment}>Decriment</button>
    </div>
  )
}
