import _store from "../store.js";
import Job from "../Models/Jobs.js";

//Public
class JobsService {
    constructor() {
        console.log("Hello from the job service")
    }
    addJob(rawJobData) {
        let newJob = new Job(rawJobData)
        _store.addJob(newJob)
    }
    deleteJob(jobId) {
        _store.deleteJob(jobId)
    }
}

const SERVICE = new JobsService();
export default SERVICE;
