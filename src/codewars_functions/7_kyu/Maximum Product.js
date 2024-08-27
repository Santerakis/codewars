// Task
//
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
//     Notes
//
// Array/list size is at least 2.
//
// Array/list numbers could be a mixture of positives, negatives also zeroes .
//
//     Input >> Output Examples
//
// adjacentElementsProduct([1, 2, 3]); ==> return 6
//
// Explanation:
//
//     The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
//
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
//
// Explanation:
//
//     Max product obtained from multiplying 5 * 10  =  50 .
//
// adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
//
// Explanation:
//
//     The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.

function adjacentElementsProduct(array) {
    let newArr = []
    for(i=0; i < array.length-1; i++){
        newArr.push(array[i]*array[i+1])
    }
    return Math.max(...newArr)
}

function adjacentElementsProduct(a) {
    return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
}

function adjacentElementsProduct(array) {
    let max = array[0] * array[1]
    for (let i = 1; i < array.length - 1; i++) {
        max = Math.max(max, array[i] * array[i + 1])
    }
    return max
}

function adjacentElementsProduct(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length -1; i++) {
        if (array[i] * array[i + 1] > max) max = array[i] * array[i + 1];
    }
    return max;
}

const adjacentElementsProduct = (array) => array.slice(1).reduce(
    (max, cur, i) => Math.max(array[i] * cur, max), -Infinity
);

function adjacentElementsProduct(array) {
    return Math.max(...array.map((n, i)=>n*array[i-1]).slice(1));
}

const adjacentElementsProduct = (a) => Math.max(...a.map((el,i,arr)=> i > 0 ? el*arr[i-1] : -Infinity))

const adjacentElementsProduct = array =>
    Math.max(...array.slice(1).map((val, idx) => val * array[idx]));


describe("Maximum Product", function(){
    it("Positive numbers", function() {
        assert.strictEqual(adjacentElementsProduct([5, 8]), 40);
        assert.strictEqual(adjacentElementsProduct([1, 2, 3]), 6);
        assert.strictEqual(adjacentElementsProduct([1, 5, 10, 9]), 90);
        assert.strictEqual(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
        assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
    });

    it("Both positive and negative values", function() {
        assert.strictEqual(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
        assert.strictEqual(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
        assert.strictEqual(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
        assert.strictEqual(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);
        assert.strictEqual(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
    });

    it("Contains zeroes", function() {
        assert.strictEqual(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
        assert.strictEqual(adjacentElementsProduct([1, 2, 3, 0]), 6);
    });
});