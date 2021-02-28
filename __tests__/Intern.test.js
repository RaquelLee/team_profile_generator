//jest tests
const intern = require("../lib/intern");

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`
test("testing if we can get school", () => {
    const testValue = "UCF";
    const intern = new Intern("raquel", 16, 
"r@intern.com", "intern", "UCF");

expect(intern.getSchool()).toBe(testValue);
});

test("testing if we can get role", () => {
    const testValue = "Intern";
    const intern = new Intern("raquel", 16, 
"r@intern.com", "UCF");

expect(intern.getRole()).toBe(testValue);
});