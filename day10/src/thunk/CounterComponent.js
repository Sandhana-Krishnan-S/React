import React from "react";
import { connect } from 'react-redux';
import { incrementAsync } from "./action";

const CounterComponent = ({counter , incrementAsync}) => {
    return (
        <div>
            <p>counter : {counter}</p>
            <button onClick={incrementAsync}>Increment Async</button>
        </div>
    )
}  

const mapStateToProp = (state) => {
    return ({
        counter : state.counter ,
    })
}

export default connect(mapStateToProp , {incrementAsync})(CounterComponent);