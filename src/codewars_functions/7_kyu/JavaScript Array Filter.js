// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
//
// The solution would work like the following:
//
//     getEvenNumbers([2,4,5,6]) // should == [2,4,6]

const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);

function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}

function getEvenNumbers(numbersArray){
    return numbersArray.filter(function(n){
        return n % 2 == 0;
    });
}

function isEven(num){
    return num%2==0
}

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    var filtered = numbersArray.filter(isEven);
    return filtered;
}

function getEvenNumbers(num){
    return num.filter(el => el % 2 == 0);
}

const getEvenNumbers = numbersArray => numbersArray.filter(a => a % 2 === 0);

const getEvenNumbers = arr =>
    arr.filter(x => !(x & 1));

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    var evenNums = numbersArray.filter(function(num) {
        return (num % 2) === 0;
    });
    return evenNums;
}

const getEvenNumbers = numbersArray => numbersArray.filter(x => x%2 === 0);

const getEvenNumbers = numbersArray => numbersArray.filter(x => !(x % 2))

function getEvenNumbers(numbersArray){
    return numbersArray.filter((number) => number % 2 === 0)
}

describe("Fixed tests", () => {
    it('should return an empty array if there are no even numbers', function(){
        assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
        assert.deepEqual(getEvenNumbers([1,2]), [2])
        assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
        assert.deepEqual(getEvenNumbers([13,15]), [])
        assert.deepEqual(getEvenNumbers([1,3,9]), [])
    });
})