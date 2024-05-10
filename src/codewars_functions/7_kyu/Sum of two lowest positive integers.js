// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
//     For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
//     [10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers){
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
};

function sumTwoSmallestNumbers(numbers) {
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}

function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
};

function sumTwoSmallestNumbers(numbers) {
    var min = Number.MAX_SAFE_INTEGER;
    var secondMin = Number.MAX_SAFE_INTEGER;

    var n;
    for (i = 0; i < numbers.length; i++) {
        n = numbers[i];
        if(n < min) {
            secondMin = min;
            min = n;
        } else if( n < secondMin ) {
            secondMin = n;
        }
    }

    return min + secondMin;
}

const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

var sumTwoSmallestNumbers = (numbers) => numbers.sort((a,b)=> a-b).slice(0, 2).reduce((a,b)=> a+b)

function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers[0] + numbers[1];
};

function sumTwoSmallestNumbers(numbers) {
    var smallestNumber = 0,
        secondSmallest = 0;

    smallestNumber = Math.min(numbers[0], numbers[1]);
    secondSmallest = Math.max(numbers[0], numbers[1]);

    for (var index = 2; index < numbers.length; index++) {
        if (numbers[index] < smallestNumber) {
            secondSmallest = smallestNumber;
            smallestNumber = numbers[index];
        } else if (numbers[index] < secondSmallest) {
            secondSmallest = numbers[index];
        }
    }

    return (smallestNumber + secondSmallest);
};

function sumTwoSmallestNumbers(numbers) {
    var result = numbers.sort(function(a,b){return a - b});
    return result[0] + result[1]
};

function sumTwoSmallestNumbers(numbers) {
    //Code here
    numbers.sort(compare);
    function compare(a,b) {
        return a-b;
    }
    return numbers[0] + numbers[1];
};

function sumTwoSmallestNumbers(numbers) {
    var lowest = numbers.sort(function(a, b){return b-a}).slice(-2);
    return lowest.pop() + lowest.pop();
};

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b)=>a>b).slice(0,2).reduce((acc,curr)=>acc+curr);
};


describe("Your function", function() {
    it("should work for basic tests", function() {
        assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
        assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
        assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
        assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
        assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
    });
});