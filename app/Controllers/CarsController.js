import _carsService from "../Services/CarsService.js";
import _store from "../store.js"

function _draw() {
  let template = ""
  let cars = _store.State.cars
  cars.forEach(car => template += car.Template)
  document.getElementById("cars").innerHTML = template
}
//Public
export default class CarsController {
  constructor() {
    console.log("hello from cars controller")
    _draw()
  }
  addCar(event) {
    event.preventDefault()
    let formData = event.target
    console.log("Add Car", formData.make.value)
    let rawCarData = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl,
      description: formData.description.value,
    }
    _carsService.addCar(rawCarData)
    _draw()
    document.getElementById("Cars").classList.add("hidden")
    document.getElementById("post-car").classList.add("hidden")
    document.getElementById("cars").classList.add("hidden")
  }
  deleteCar(carId) {
    _carsService.deleteCar(carId)
    _draw()
  }
  Cars() {
    document.getElementById("cars").classList.remove("hidden")
    document.getElementById("post-car").classList.remove("hidden")
    document.getElementById("post-job").classList.add("hidden")
    document.getElementById("job").classList.add("hidden")
    document.getElementById("post-house").classList.add("hidden")
    document.getElementById("house").classList.add("hidden")
  }
  postCar() {
    document.getElementById("Cars").classList.remove("hidden")
  }
}

