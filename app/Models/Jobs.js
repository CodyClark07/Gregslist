let id = 0
export default class Job {
    constructor(data) {
        this.id = id++
        this.company = data.company
        this.position = data.position
        this.pay = data.pay
        this.hours = data.hours
        this.description = data.description

    }

    get Template() {
        return `
        <div class="col-3 border border-rounded shadow">
        <h1>${this.company}</h1>
        <h1>${this.position}</h1>
        <h1>${this.pay}</h1>
        <h1>${this.hours}</h1>
        <h1>${this.description}</h1>
        <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        </div>
        `
    }
}