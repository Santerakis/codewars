// This code does not execute properly. Try to figure out why.

multiply = function (a, b) {
    return a * b;
}

multiply = (a, b) => a * b;

function multiply(a, b){
    return a * b
}

function multiply(a, b){
    if (!a || !b || typeof(a) != "number" || typeof(b) != "number") {
        return 0;
    }
    return a * b;
}

const multiply = (a, b) => a * b;

function multiply(a, b){
    if (undefined == a || undefined == b
        || isNaN(a) || isNaN(b))
        throw new Error('Both arguments should be numbers')
    return a * b
}

let multiply = (a, b) => a * b;

describe("Multiply", () => {
    it("fixed tests", () => {
        assert.strictEqual(multiply(1,1), 1);
        assert.strictEqual(multiply(2,1), 2);
        assert.strictEqual(multiply(2,2), 4);
        assert.strictEqual(multiply(3,5), 15);
    });
});