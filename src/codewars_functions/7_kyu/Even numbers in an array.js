// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//
//     For example:
//
//     ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
//

const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);

const isEven = n => n % 2 === 0;
const evenNumbers = (a, n) => a.filter(isEven).slice(-n);

function evenNumbers(array, number) {
    let arr = [];
    for (let i=array.length-1;number>0;i--){
        if (array[i] % 2 == 0) {
            arr.push(array[i]);
            number--;
        }
    }
    return arr.reverse();
}

var evenNumbers = (arr, num) => arr.filter(el=> el % 2 == 0).slice(-num)

function evenNumbers(array, number) {
    return array.filter(num => num % 2 == 0).slice(-number);
}

const evenNumbers = (array, number) =>
    array.filter(val => !(val & 1)).slice(-number);

const evenNumbers = (a, n) => a.filter(e => !(e % 2)).slice(-n);

function evenNumbers(array, number) {
    let l = array.filter(e => e % 2 === 0)
    return l.slice(l.length - number)
}

function evenNumbers(a, n) {
    return a.filter(a => a % 2 === 0).slice(-n);
}

const evenNumbers = (array, number) => array.filter(el => el  % 2 == 0).slice(- number);

function evenNumbers(array, number) {
    return array.filter(x=>x%2===0).slice(-number);
}

const evenNumbers = (arr, num) => arr.filter(n => !(n & 1)).slice(-num);

function evenNumbers(arr, n) {
    return arr.filter(x => x % 2 == 0)
        .reverse()
        .slice(0,n)
        .reverse()
}

const evenNumbers = (a, n) => a.reduceRight((s,e)=> (s.length<n && e%2==0? s.concat([e]) : s) , []).reverse();

function evenNumbers(array, number) {
    // without iterating through the whole array
    let i = 0;
    return array.reverse().filter(e => !(e % 2) && i++ < number).reverse();
}

describe("Even numbers in an array",() => {
    it("Basic Tests", () => {
        assert.deepEqual(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
        assert.deepEqual(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
        assert.deepEqual(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
    });
});