import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function GetAxios() {
    const [username , setName] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/user').then((res) => {
            const val = res.data;
            setName(val);
        })
    } , [])
  return (
    <div>
      {username.map((user) => <li key={user.id} type = 'none'>{user.name}</li>)}
    </div>
  )
}
