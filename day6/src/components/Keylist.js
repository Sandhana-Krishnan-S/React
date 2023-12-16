import React from 'react'

export default function Keylist() {
    const fru = ['apple' , 'orange' , 'banana' , 'kiwi' , 'mango']
    const stfru = fru.map((val , index) => <li key={index} type = 'none' > {index} = {val}</li>)

  return (
    <div>
      {stfru}
    </div>
  )
}
