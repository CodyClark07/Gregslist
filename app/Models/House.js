let id = 0
export default class House {
    constructor(data) {
        this.id = id++
        this.location = data.location
        this.address = data.address
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description

    }

    get Template() {
        return `
        <div class="col-3 border border-rounded shadow">
        <h1>${this.location}</h1>
        <h1>${this.address}</h1>
        <h1>${this.year}</h1>
        <h1>${this.price}</h1>
        <img class="img-thumbnail" src= "${this.imgUrl}">
        <h1>${this.description}</h1>
        <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
        </div>
        `
    }
}