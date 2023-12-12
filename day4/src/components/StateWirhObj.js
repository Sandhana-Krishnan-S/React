import React from 'react'
import { useState } from 'react'

export default function StateWirhObj() {
    const [data , setdata] = useState({
        name: "sandu",
        reg: 202
    });
    // data.name = "sanja";
    const changename = () => {
        setdata(ele => {
            return {
                ...ele , name : "sachin"
            }
        });
    }
    const changereg = () => {
        setdata(ele => {
            return {
                ...ele , reg : 201
            }
        });
    }
  return (
    <div>
      <h1>My Name Is : {data.name}</h1>
      <h2>My Regno Is : {data.reg}</h2>
      <button onClick={changename}>Name</button>
      <button onClick={changereg}>reg</button>
    </div>
  )
}
