// Write a function which calculates the average of the numbers in a given list.
//
//     Note: Empty arrays should return 0.

var find_average = (array) => {
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

function find_average(array) {
    if (array.length === 0) {
        return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
        result +=array[i];
    }
    return result/array.length;
}

function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}

const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;

function find_average(array) {
    return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}

function find_average(array) {
    return array.length>0 ?
        array.reduce((a,b)=>a+b)/array.length : 0
}

function find_average(array) {
    if ( array.length == 0) return 0
    let result = 0;
    for(num of array) {
        result += num;
    }
    return result / array.length;
}

function find_average(array) {
    // your code here
    return array.length ? array.reduce((a,c )=> a + c,0) / array.length : 0
}

function findAverage(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let result = sum / array.length;
    if(array.length ===0){
        return 0
    }else{
        return result
    }
}

const findAverage = array =>
    array.length > 0 ? array.reduce((prev,curr) => prev + curr) / array.length : 0

function findAverage(array) {
    return array.length? array.reduce((acc,c)=>acc+=c,0)/array.length:0
}

function findAverage(array) {
    // your code here
    return array.length != 0 ? array.reduce((acc, curr) => acc + curr,0) / (array.length) : 0;
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(findAverage([1,1,1]), 1);
        assert.strictEqual(findAverage([1,2,3]), 2);
        assert.strictEqual(findAverage([1,2,3,4]), 2.5);
    });
});
