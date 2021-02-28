const Intern = require("../lib/intern");

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