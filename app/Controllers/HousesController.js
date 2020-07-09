import _housesService from "../Services/HousesService.js";
import _store from "../store.js"

function _draw() {
    let template = ""
    let houses = _store.State.houses
    houses.forEach(house => template += house.Template)
    document.getElementById("house").innerHTML = template
}
//Public
export default class HouseController {
    constructor() {
        console.log("hello from house controller")
        _draw()
    }
    addHouse(event) {
        event.preventDefault()
        let formData = event.target
        console.log("Add House", formData.location.value)
        let rawHouseData = {
            location: formData.location.value,
            address: formData.address.value,
            year: formData.year.value,
            price: formData.price.value,
            imgUrl: formData.imgUrl,
            description: formData.description.value,
        }
        _housesService.addHouse(rawHouseData)
        _draw()
        document.getElementById("Houses").classList.add("hidden")
        document.getElementById("house").classList.add("hidden")
        document.getElementById("post-house").classList.add("hidden")
    }
    deleteHouse(houseId) {
        _housesService.deleteHouse(houseId)
        _draw()
    }
    Houses() {
        document.getElementById("house").classList.remove("hidden")
        document.getElementById("post-house").classList.remove("hidden")
        document.getElementById("post-car").classList.add("hidden")
        document.getElementById("cars").classList.add("hidden")
        document.getElementById("post-job").classList.add("hidden")
        document.getElementById("Jobs").classList.add("hidden")
        document.getElementById("Houses").classList.add("hidden")
    }

    postHouse() {
        document.getElementById("Houses").classList.remove("hidden")

    }
}
