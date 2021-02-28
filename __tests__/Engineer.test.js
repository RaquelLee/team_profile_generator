const Engineer = require("../lib/engineer");

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`
test("testing if we can get github", () => {
    const testValue = "raquellee";
    const intern = new Engineer("raquel", 16, 
"r@intern.com", "intern", "UCF");

expect(intern.getGithub()).toBe(testValue);
});test("testing if we can get school", () => {
    const testValue = "UCF";
    const intern = new Intern("raquel", 16, 
"r@intern.com", "intern", "UCF");

expect(intern.getSchool()).toBe(testValue);
});test("testing if we can get school", () => {
    const testValue = "UCF";
    const intern = new Intern("raquel", 16, 
"r@intern.com", "intern", "UCF");

expect(intern.getSchool()).toBe(testValue);
});