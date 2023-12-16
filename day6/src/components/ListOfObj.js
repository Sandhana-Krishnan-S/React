import React from 'react'

function Display(props) {
    return (
        <div>
             <h3>id : {props.list.id}</h3>
            <h3> name : {props.list.name} </h3>
            <h3>age : {props.list.age}</h3>
        </div>     
    )
}

export default function ListOfObj() {
    const coll = [{id : 201 , name:'vipu' , age: 19} ,
     {id: 202 , name: 'sandu' , age: 19} ,
      {id:203 , name: 'sanjaa' , age:19}
    ]
    const stcoll = coll.map((list) => <Display list = {list} />)

  return (
    <div>
      {stcoll}
    </div>
  )
}
