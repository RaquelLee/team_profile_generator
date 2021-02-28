const Engineer = require("../lib/engineer");

test("testing if we can get github", () => {
    const testValue = "raquellee";
    const engineer = new Engineer("raquel", 16, 
"r@intern.com", "raquellee");

expect(engineer.getGithub()).toBe(testValue);
});

test("testing if we can get role", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("raquel", 16, 
"r@intern.com", "intern", "UCF");

expect(engineer.getRole()).toBe(testValue);
});