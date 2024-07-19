// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
//
//     For Example:
//
//     [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
//     , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
//     , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
//
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
//
// Note: You will always be given a non-empty list containing positive values.
//
//     ENJOY CODING :)


function sumOfMinimums(arr) {
    return arr.reduce((p, c) => p + Math.min(...c), 0);
}

function sumOfMinimums(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += Math.min(...arr[i])
    }
    return total;
}

const sumOfMinimums = arr => arr.reduce((a, v) => a + Math.min(...v), 0);

const sumOfMinimums = ( array ) => array.map( el => Math.min(...el) ).reduce( (a, b)=> a + b, 0)

function sumOfMinimums(arr) {
    return arr.reduce((a, b) => a + Math.min(...b), 0);
}

function sumOfMinimums(arr) {
    let sum = 0
    arr.forEach((x)=>sum = sum + x.sort(function(a, b){return a - b})[0])
    return sum
}

function sumOfMinimums(arr) {
    let sum = 0;
    for(let a of arr){
        sum += Math.min.apply(Math, a);
    }
    return sum;
}

const sumOfMinimums = arr =>
    arr.reduce((pre, val) => pre + Math.min(...val), 0);


describe("Basic tests", () => {
    it("Testing for [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]", () => assert.strictEqual(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9));
    it("Testing for [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]", () => assert.strictEqual(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76));
});