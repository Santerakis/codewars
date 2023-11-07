// Description:
//     Introduction
//
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//     Task
//
// Given a year, return the century it is in.
// Examples
//
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

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

century=y=>Math.ceil(y/100)

century=y=>--y/100+1|0

function century(year) {
    let century = 1;
    while (year > 100){
        year = year - 100;
        century ++;
    }
    return century;
}

describe("Multiply", () => {
    it("fixed tests", () => {
        assert.strictEqual(multiply(1,1), 1);
        assert.strictEqual(multiply(2,1), 2);
        assert.strictEqual(multiply(2,2), 4);
        assert.strictEqual(multiply(3,5), 15);
    });
});