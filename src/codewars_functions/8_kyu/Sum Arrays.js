// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples
//
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398
// Assumptions
//
// You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.
//
// What We're Testing
//
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// Sum Numbers
sum = function (numbers) {
    "use strict";
    return numbers.reduce(function(t, n){
        return t + n;
    }, 0);
};

// Sum Numbers
sum = function (numbers) {
    "use strict";
    var total = 0;
    for(var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

const sum = n => n.reduce((a,b) => a+b, 0);

// Sum Numbers
sum = function (numbers) {
    "use strict";
    return numbers.reduce(function(prev, cur) { return prev + cur }, 0);
};

let array = [1, 5.2, 4, 0, -1];

function sum (array) {
    let res = 0;
    for (let i = 0; i < array.length; i++) {
        res = res + array[i];
    }
    return res;

}
console.log(sum(array));

const sum = num => num.reduce((acc, curr)=> acc+curr, 0);

// Sum Numbers
function sum (numbers) {
    if(numbers.length === 0){
        return 0;
    }
    else {
        let sumNumbers = 0;
        for (e of numbers) {
            sumNumbers += e;
        }
        return sumNumbers;
    }
};

const sum = (a) => a.reduce((s,e) => s += e, 0);

const sum = numbers => numbers.reduce((sum, number) => sum += number, 0);

const sum = numbers =>
    numbers.reduce((pre, val) => pre + val, 0);

function sum (numbers) {
    "use strict";
    return numbers.reduce((a,b)=> a+b, 0)
}; // kto czyta ten dupa

// Sum Numbers
function sum (numbers) {
    return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
};

// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce((a, x) => a + x, 0);

};

const sum = numbers => numbers.reduce((sum, num) => sum + num, 0);

// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce((acc,num) => acc+num,0);
};

// Sum Numbers
function sum (numbers) {
    let total = 0
    "use strict";
    for(const number of numbers){
        total += number
    }
    return total
};

// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce((sum, n) => sum + n, 0);
};


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(sum([]), 0);
        Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
    });
});
