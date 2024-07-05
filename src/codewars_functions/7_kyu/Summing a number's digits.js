// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//
// For example: (Input --> Output)
//
// 10 --> 1
// 99 --> 18
// -32 --> 5
//
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}

function sumDigits(number) {
    var i = 0;
    var sum = 0;
    number = Math.abs(number)
    while(number != 0)
    {
        sum += number % 10
        number = Math.floor(number/10)
    }
    return sum
}

sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);

const sumDigits = number =>
    [...`${Math.abs(number)}`].reduce((pre, val) => pre + +val, 0);

const sumDigits = number => String(number).replace('-', '').split('').reduce((prev, curr) => prev + Number(curr), 0);

function sumDigits(number) {
    return number.toString().split("").reduce(function(sum,n) {
        return n === '-' ? sum : sum+parseInt(n);
    },0);
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(sumDigits(10), 1);
        assert.strictEqual(sumDigits(99), 18);
        assert.strictEqual(sumDigits(-32), 5);
    })
})