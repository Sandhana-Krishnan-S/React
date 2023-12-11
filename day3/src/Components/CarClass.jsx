import { Component } from "react";
import car from '../Assets/car.webp';
import CarFun from './CarFun';

class CarClass extends Component {
    render() {
        return (
            <div>
                <h2>Lamborghini</h2>
                <img src = {car} />
                <CarFun />
            </div>
        )
    }
}

export default CarClass;