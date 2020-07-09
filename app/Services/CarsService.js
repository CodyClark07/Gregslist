import _store from "../store.js";
import Car from "../Models/Car.js";

//Public
class CarsService {
    constructor() {
        console.log("Hello from the car service")
    }
    addCar(rawCarData) {
        let newCar = new Car(rawCarData)
        _store.addCar(newCar)
    }
    deleteCar(carId) {
        _store.deleteCar(carId)
    }
}

const SERVICE = new CarsService();
export default SERVICE;
