import _store from "../store.js";
import House from "../Models/House.js";

//Public
class HousesService {
    constructor() {
        console.log("Hello from the house service")
    }
    addHouse(rawHouseData) {
        let newHouse = new House(rawHouseData)
        _store.addHouse(newHouse)
    }
    deleteHouse(houseId) {
        _store.deleteHouse(houseId)
    }
}

const SERVICE = new HousesService();
export default SERVICE;
