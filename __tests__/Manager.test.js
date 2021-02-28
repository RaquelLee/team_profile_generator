//jest tests
const Manager = require("../lib/manager");

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`
test("testing if we can get officeNumber", () => {
    const testValue = 1;
    const manager = new Manager("raquel", 1, 
"r@intern.com", 1);

expect(manager.officeNumber.toBe(testValue)

)});

test("testing if we can get role", () => {
    const testValue = "Manager";
    const manager = new Manager("raquel", 1, 
"r@hi.com", "UCF");

expect(manager.getRole()).toBe(testValue);
});