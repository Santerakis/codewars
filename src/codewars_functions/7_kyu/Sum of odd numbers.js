// Given the triangle of consecutive odd numbers:
//
//     1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
//
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}

function rowSumOddNumbers(n) {
    return n*n*n
}

let rowSumOddNumbers = n => n ** 3;

function rowSumOddNumbers(n) {
    return n**3
}

function rowSumOddNumbers(n) {
    // TODO
    return n > 0 ? n * n * n : "Wrong Input"
}

function rowSumOddNumbers(n) {
    var start = n * n - n + 1;
    var result = 0;

    for(i = 0; i < n; i++)
    {
        result =  result + (start + (i*2));
    }

    return result;
}

const rowSumOddNumbers = n => Math.pow(n, 3);

function rowSumOddNumbers(n) {
    const out = Array.from( {length: n*(n+1)/2}, (_,i) => i * 2 + 1 );
    return out.slice( out.length - n ).reduce((a, b) => a + b, 0)
}

const rowSumOddNumbers = (n) => Array.from({length: n*(n+1)/2}, (_, i) => i*2+1).slice(-n).reduce((a, b)=> a + b, 0)

const rowSumOddNumbers=n=>n**3;

const rowSumOddNumbers = n => n * n * n;

function rowSumOddNumbers(n) {
    var first = (n*(n-1)) + 1;
    var result = 0;
    for (i = 0; i < n; i++) {
        result += first;
        first += 2;
    }
    return result;
}


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(rowSumOddNumbers(1), 1);
        assert.strictEqual(rowSumOddNumbers(42), 74088);
    });
});