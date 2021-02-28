const Employee = require("./employee")

class Intern extends Employee{
    constructor(name, id, email, school, role){
        super(name, id, email);
        this.school = school;
        role = "Intern";
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
};
module.exports = Intern;
