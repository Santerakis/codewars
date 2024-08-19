// Given a sequence of numbers, find the largest pair sum in the sequence.
//
//     For example
//
//     [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//     [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
//
// Input sequence contains minimum two elements and every element is an integer.

it("Basic tests", () => {
    doTest([10,14,2,23,19], 42);
    doTest([-100,-29,-24,-19,19], 0);
    doTest([1,2,3,4,6,-1,2], 10);
    doTest([-10, -8, -16, -18, -19], -18);
});

function largestPairSum(numbers) {
    var [a, b] = numbers.sort((a, b) => b - a)
    return a + b
}

const largestPairSum = numbers => numbers.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a + b);

function largestPairSum(numbers)
{
    numbers.sort((a,b) => b - a);
    return numbers[0] + numbers[1];
}

const largestPairSum = ($) => $.sort((a, b)=> a > b).slice(-2).reduce((a, b) => a + b, 0)

const largestPairSum = a => a.sort((x, y) => y - x)[0] + a[1];

const largestPairSum = ([max, ...a]) => a.reduce((acc, c) => acc.max + c > acc.res ? {max: c, res: acc.max + c} : acc, {max, res: -Infinity}).res

function largestPairSum(numbers)
{
    let arr = numbers.sort((a, b) =>  b - a);
    return arr[0] + arr[1];
}

function largestPairSum(numbers){
    return numbers.sort((a,b) => b - a).slice(0,2).reduce((a,b)  => a + b);
}


it("Basic tests", () => {
    doTest([10,14,2,23,19], 42);
    doTest([-100,-29,-24,-19,19], 0);
    doTest([1,2,3,4,6,-1,2], 10);
    doTest([-10, -8, -16, -18, -19], -18);
});
