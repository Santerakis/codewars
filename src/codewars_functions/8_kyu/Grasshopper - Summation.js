// Summation
//
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example (Input -> Output):
//
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
        result += i;
    }

    return result;
}

const summation = n => n * (n + 1) / 2;

function summation(num) {
    return num * (num + 1) / 2
}

var summation = function (num) {
    var sum = 0;
    for(var i=0; i<=num;i++){
        sum+=i
    }
    return sum;
}

var summation = function f(num) {
    return num ? num + f(num-1) : 0;
}

var summation = function (num) {
    return num * (num+1) / 2;
}

var summation = function (num) {
    return (num > 1) ? num + summation(num - 1):num;
}

const summation = num => (
    Array(num).fill(true)
        .reduce((sum, item, index) => sum + index + 1, 0)
);

const summation = num => (1 + num) * num / 2;

var summation = function (num) {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

var summation = function (num, count = 0) {
    for (var i=num+1; i--;) count+=i;
    return count
}




describe('summation', function () {
    it('should return the correct total', function () {
        assert.strictEqual(summation(1),  1);
        assert.strictEqual(summation(2),  3);
        assert.strictEqual(summation(8), 36);
    })
})