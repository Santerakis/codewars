// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
        return (n*n) + sum;
    }, 0)
}

function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}

function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
        sum += n * n
    });
    return sum;
}

function squareSum(numbers){
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += (numbers[i] * numbers[i]);
    }
    return result;
}

const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)

function squareSum(numbers)
{
    var totalSum = 0;
    for (i=0;i<numbers.length;i++)
    {
        totalSum += Math.pow(numbers[i], 2);
    }
    return totalSum;
}

function squareSum(numbers) {
    return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
}

function squareSum(numbers) {
    return numbers.reduce((s,a)=>s+a*a,0);
}

function squareSum(numbers){
    return numbers.reduce((sum, n) => sum + Math.pow(n, 2), 0);
}

function squareSum(numbers){
    return numbers.reduce(function(p, c) { return p + Math.pow(c, 2); }, 0);
}

function squareSum(numbers){
    return numbers.map(x => x ** 2).reduce((a,b) => a + b ,0);
}

escribe("Tests", () => {
    it("test", () => {
        assert.strictEqual(squareSum([1,2]), 5);
        assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
        assert.strictEqual(squareSum([]), 0);
    });
});
