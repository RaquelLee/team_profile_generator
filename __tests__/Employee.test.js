const Employee = require("../lib/Employee");

test("testing if we can get name", () => {
    const testValue = "raquel";
    const employee = new Employee("raquel", 2, 
    "r@intern.com", 1);

    expect(employee.name).toBe(testValue);
});

test("testing if we can get id", () => {
    const testValue = 2;
    const employee = new Employee("raquel", 2, 
    "r@intern.com", 1);

    expect(employee.id).toBe(testValue);
});

test("testing if we can get email", () => {
    const testValue = "r@intern.com";
    const employee = new Employee("raquel", 2, 
    "r@intern.com", 1);

    expect(employee.email).toBe(testValue);
});
test("testing if we can get name", () => {
    const testValue = "raquel";
    const employee = new Employee("raquel", 2, 
    "r@intern.com", 1);

    expect(employee.getName()).toBe(testValue);
});

test("testing if we can get id", () => {
    const testValue = 2;
    const employee = new Employee("raquel", 2, 
    "r@intern.com", 1);

    expect(employee.getId()).toBe(testValue);
});

test("testing if we can get email", () => {
    const testValue = "r@intern.com";
    const employee = new Employee("raquel", 2, 
    "r@intern.com", 1);

    expect(employee.getEmail()).toBe(testValue);
});

test("testing if we can get role employee", () => {
    const testValue = "Employee";
    const employee = new Employee("raquel", 1, 
    "r@hi.com", "UCF");

    expect(employee.getRole()).toBe(testValue);
});


