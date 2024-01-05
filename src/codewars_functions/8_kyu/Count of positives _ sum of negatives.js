// Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//     If the input is an empty array or is null, return an empty array.
//     Example
//
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
        return [];

    var positive = 0;
    var negative = 0;

    for (var i=0, l=input.length; i<l; ++i)
    {
        if (input[i] > 0)
            ++ positive;
        else
            negative += input[i];
    }

    return [positive, negative];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
        if (n > 0) arr[0]++;
        if (n < 0) arr[1] += n;
        return arr;
    }, [0, 0]);
}

function countPositivesSumNegatives(input) {
    var newArr = [];
    var positiveNumber = 0;
    var negativeNumber = 0;

    // Validate Input
    if (input === null || input.length === 0)
        return newArr;

    // Loop through array of Numbers
    for (var i = 0; i < input.length; i++) {
        if (input[i] == 0)
            continue;

        // Count positives
        else if (input[i] > 0)
            positiveNumber++;

        // Sum negatives
        else if (input[i] < 0)
            negativeNumber += input[i];

    }

    // Prepare Output
    newArr.push(positiveNumber);
    newArr.push(negativeNumber);

    return newArr;
}

function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce(function(p, c, i, s){
        c <= 0 ? p[1] += c : p[0] += 1;
        return p;
    }, [0, 0]) : [];
}

function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return [];
    var sum = 0, count = 0;
    input.forEach(function(el){ if (el > 0) count++; else sum+=el});
    return [count, sum];
}

function countPositivesSumNegatives(input) {
    return !input || !input.length ? [] : [
        input.filter(n => n > 0).length,
        input.filter(n => n < 0).reduce((a, b) => a + b)
    ];
}

function countPositivesSumNegatives(input) {
    return (input && input.length) ? [
        input.filter(x => x > 0).length,
        input.reduce((t, c) => c < 0 ? t + c : t, 0)
    ] : [];
}

const countPositivesSumNegatives = input =>
    !(input && input.length) ? [] :
        [input.filter(val => val > 0).length, input.filter(val => val < 0).reduce((pre, val) => pre + val, 0)];

function countPositivesSumNegatives(input) {
    if(input === null || input.length < 1) return [];
    let r = [0,0];
    input.forEach(function(e) {
        (e>0) ? r[0]++ : r[1] += e;
    });
    return r;
}

function countPositivesSumNegatives (A) {
    if (!A || !A.length) return []

    let pos = A.filter(x=>x>0),
        neg = A.filter(x=>x<=0)

    return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]
}

function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce((acc, value) => ( value > 0 ? acc[0] = acc[0] + 1 : acc[1] = acc[1] + value, acc ),[0,0]) : []
}

function countPositivesSumNegatives(input) {
    if(!input || input.length == 0) return [];

    var positiveCount = input.reduce((sum, item) => item > 0 ? ++sum : sum, 0);
    var negativeSum = input.reduce((sum, item) => item < 0 ? sum + item : sum, 0);

    return [positiveCount, negativeSum];
}

function countPositivesSumNegatives(a) {
    return !a || !a.length ? [] : [a.filter(e => e > 0).length, a.filter(e => e < 0).reduce((s, c) => s + c, 0)];
}

function countPositivesSumNegatives(input) {
    if (input && input.length) {
        return input.reduce(function(a, c) {
            c <= 0 ? a[1] += c : a[0] += 1;
            return a;
        }, [0,0]);

    } else {
        return [];
    }
}

describe("Example tests", () => {
    it("Testing for fixed test 1", () => {
        let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
        let actual = countPositivesSumNegatives(testData);
        let expected = [10, -65];
        assert.deepEqual(actual, expected);
    })

    it("Testing for fixed test 2", () => {
        let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
        let actual = countPositivesSumNegatives(testData);
        let expected = [8, -50];
        assert.deepEqual(actual, expected);
    });
});