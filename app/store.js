import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Job from "./Models/Jobs.js";

let _state = {
  // activeValue: new Value({ title: "Value" }),
  // /** @type {Value[]} */
  // values: [],
  /** @type {Car[]} */
  cars: [
    // new Car("Chevy", "Tracker", 1989, 2000, "",
    //   "its trackin"),
    // new Car("Subaru", "Forester", 2017, 23000, "", "the mobile")
  ],
  /** @type {House[]} */
  houses: [

  ],

  /** @type {Job[]} */
  jobs: [

  ],

};

class Store {
  addCar(newCar) {
    _state.cars.push(newCar)
  }
  deleteCar(carId) {
    let indexToRemove = _state.cars.findIndex(car => car.id == carId)
    _state.cars.splice(indexToRemove, 1)
  }

  addHouse(newHouse) {
    _state.houses.push(newHouse)
  }

  deleteHouse(houseId) {
    let indexToRemove2 = _state.houses.findIndex(house => house.id == houseId)
    _state.houses.splice(indexToRemove2, 1)

  }

  addJob(newJob) {
    _state.jobs.push(newJob)
  }

  deleteJob(jobId) {
    let indexToRemove3 = _state.jobs.findIndex(job => job.id == jobId)
    _state.jobs.splice(indexToRemove3, 1)

  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
