class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email
        role = "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
    };
module.exports = Employee;
