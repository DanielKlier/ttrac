export default class Task {

    constructor(uuid) {
        this.uuid        = uuid;
        this.title       = '';
        this.description = '';
        this.timeLogs    = [];
        this.jiraIssue   = '';
    }

    get elapsedTime() {
        return this.timeLogs.reduce(
            (time, current) => time + current.elapsedTime
        );
    }
}