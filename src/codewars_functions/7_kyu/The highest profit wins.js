// Story
//
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
//     Task
//
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
//
//     [1,2,3,4,5] --> [1,5]
//     [2334454,5] --> [5,2334454]
//     [1]         --> [1,1]
//
// Remarks
//
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}

const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];

function minMax(arr) {
    var a = arr.sort(function(a,b) {return a-b});
    return [a[0], a[a.length-1]];
}

function minMax(arr){
    var max = arr[0], min = arr[0];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]>max) max = arr[i];
        if(arr[i]<min) min = arr[i];
    }
    return [min,max];
}

function minMax(arr){
    var min = Math.min.apply(null, arr),
        max = Math.max.apply(null, arr);
    return [min, max];
}

var minMax = arr => [Math.min.apply(null, arr), Math.max.apply(null, arr)];

function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return [min, max];
}

let minMax = arr => [Math.min(...arr), Math.max(...arr)];

function minMax(arr){
    return arr.reduce(function(p, e){
        return [p[0] < e ? p[0] : e, p[1] > e ? p[1] : e];
    },[arr[0], arr[0]]);
}

const minMax = (arr, a = arr.sort((a,b)=> a - b)) => [a[0], a[arr.length-1]];

function minMax(arr){
    const M = Math
    return [M.min.apply(M, arr), M.max.apply(M, arr)];
}

function minMax(arr){
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    return [min, max];
}

function minMax(arr){
    arr.sort((a,b)=>a-b);
    return [arr[0],arr[arr.length-1]];
}

minMax = a => [Math.min(...a), Math.max(...a)];

function minMax(arr){
    var max = Math.max.apply(Math, arr);
    var min = Math.min.apply(Math, arr);
    return [min,max];
}

function minMax(arr){
    return [arr.reduce(function(x,y){ return x < y ? x : y; }),
        arr.reduce(function(x,y){ return x > y ? x : y; })]; // fix me!
}

function minMax(arr){
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    const sum = [];
    sum.push(min,max)
    return sum
}

describe("minMax", () => {
    const testCases = [
        [[1, 2, 3, 4, 5], [1, 5]],
        [[2334454, 5], [5, 2334454]],
        [[5], [5, 5]]
    ];
    for(const [input, expected] of testCases) {
        it(`should work for ${JSON.stringify(input)}`, () => {
            assert.deepEqual(minMax(input), expected);
        });
    }
});