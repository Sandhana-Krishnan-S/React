import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PostAxios() {
    const [name , setName] = useState() 
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/user' , {name}).then(res => {
            console.log({name})
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange}></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
