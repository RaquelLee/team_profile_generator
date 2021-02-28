const Employee = require("./employee")

class Manager extends Employee{
    constructor(name, id, email, officeNum, role) {
        super(name, id, email);
        this.officeNum = officeNum;
        role = "Manager";
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return "Manager";
    }
};
module.exports = Manager;