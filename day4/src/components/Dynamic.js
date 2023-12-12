import React from 'react'
import { useState } from 'react'

export default function Dynamic() {
    const [num , setNum] = useState(15)
    if(num % 5 == 0) {
        return (
            <div>
                <h1>Number is Divisible by 5</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Not A number /5 </h1>
            </div>
        )
    }
}
