import React from 'react';

export default function ListOfObjNoDisp() {
    const fru = [{price : 150 , fruit:'apple'} ,
     {price: 100 , fruit: 'orange' } ,
      {price: 80 , fruit: 'banana' }
    ]
    const stfru = fru.map((list , index) => <li type = "none" key={index}>{index+1} : Price : {list.price} Fruit : {list.fruit}</li>)
  return (
    <div style={{backgroundColor : 'red'}}>
      {stfru}
    </div>
  )
}
