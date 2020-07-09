import _jobsService from "../Services/JobsService.js";
import _store from "../store.js"

function _draw() {
    let template = ""
    let jobs = _store.State.jobs
    jobs.forEach(job => template += job.Template)
    document.getElementById("job").innerHTML = template
}
//Public
export default class JobsController {
    constructor() {
        console.log("hello from job controller")
        _draw()
    }
    addJob(event) {
        event.preventDefault()
        let formData = event.target
        console.log("Add Job")
        let rawJobData = {
            company: formData.company.value,
            position: formData.position.value,
            pay: formData.pay.value,
            hours: formData.hours.value,
            description: formData.description.value,
        }
        _jobsService.addJob(rawJobData)
        _draw()
        document.getElementById("Jobs").classList.add("hidden")
        document.getElementById("job").classList.add("hidden")
        document.getElementById("post-job").classList.add("hidden")
    }
    deleteJob(jobId) {
        _jobsService.deleteJob(jobId)
        _draw()
    }
    Jobs() {
        document.getElementById("post-job").classList.remove("hidden")
        document.getElementById("job").classList.remove("hidden")
        document.getElementById("post-car").classList.add("hidden")
        document.getElementById("cars").classList.add("hidden")
        document.getElementById("post-house").classList.add("hidden")
        document.getElementById("houses").classList.add("hidden")
    }
    postJob() {
        document.getElementById("Jobs").classList.remove("hidden")
    }
}
