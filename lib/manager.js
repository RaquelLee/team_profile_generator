const Employee = require("./employee")

class Manager extends Employee{
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role);
        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }

    getRole() {
        return this.role;
    }
};
module.exports = Manager;