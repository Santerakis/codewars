// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//
//     The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//
// For example:
//
//     gimme([2, 3, 1]) => 0
//
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
//
// Another example (just to make sure it is clear):
//
// gimme([5, 10, 14]) => 1
//
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}

const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};

var gimme = function (inputArray) {
    let index = 0;
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] !== max && inputArray[i] !== min){
            index = i;
        }
    }
    return index;
};

var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice(0).sort(function(a,b) { return a-b; })[1]);
};

var gimme = function (inputArray) {
    var order = inputArray.slice().sort(function(a,b) { return a-b;});
    return inputArray.indexOf(order[1]);
};

var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice().sort(function(a,b){return a-b})[1])
};

const gimme = arr => arr.indexOf([...arr].sort((a,b) => a-b)[1]);

const gimme = inputArray => {
    let sorting = [...inputArray].sort((a,b) => a - b)[1];
    return inputArray.indexOf(sorting)
}

const asc = (a, b) => a - b;
const gimme = arr =>
    arr.indexOf(arr.slice().sort(asc)[1]);

function gimme (triplet) {
    for (let i = 0; i < triplet.length; i++) {
        if (triplet[i] < Math.max(...triplet) && triplet[i] > Math.min(...triplet)) {
            return i
        }
    }
}

const gimme = (triplet) => triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);

function gimme(a) {
    return a[0]>a[1]?a[0]>a[2]?a[1]>a[2]?1:2:0:a[0]>a[2]?0:a[1]>a[2]?2:1;
}


describe("Basic Test", function () {
    it("Tests for integers", function () {
        doTest([2, 3, 1], 0);
        doTest([5, 10, 14], 1);
    });
    it("Tests for floats", function () {
        doTest([2.1, 3.2, 1.4], 0);
        doTest([5.9, 10.4, 14.2], 1);
    });
    it("Tests for negative numbers", function () {
        doTest([-2, -3, -1], 0);
        doTest([-5, -10, -14], 1);
    });
    it("Tests for mixed numbers", function () {
        doTest([-2, -3.2, 1], 0);
        doTest([-5.2, -10.6, 14], 0);
    });
});