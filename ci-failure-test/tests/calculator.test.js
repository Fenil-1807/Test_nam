const { add } = require("../src/calculator");

test("addition should return correct result", () => {
    expect(add(2, 3)).toBe(5);
});