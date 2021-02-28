const Employee = require("./employee")

class Engineer extends Employee{
    constructor (name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};
module.exports = Engineer;