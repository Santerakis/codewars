// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
//
//     All inputs will be valid.

function digits(n) {
    return n.toString().length;
}

function digits(n) {
    return String(n).length
}

function digits(n) {
    return `${n}`.length;
}

const digits = n => n.toString().length;

const digits = n => String(n).length

const digits = function ( n ) { return String(n).length }

function digits(n) {
    return (Math.log10(n) | 0) + 1;
}

let digits = n => (n + "").length;

const digits = ( n ) => (''+n+'').length

const digits = (it_is_really_big_number) => {
    return ( it_is_really_big_number + [] ).length
}


describe('Sample Tests', function() {
    const tests = [
        [0, 1],
        [9, 1],
        [66, 2],
        [12345, 5],
        [128685, 6],
        [9876543210, 10],
        [9007199254740991, 16],
    ];

    for (let [n, expected] of tests) {
        it(`${n}`, function() {
            assert.strictEqual(digits(n), expected);
        });
    }
});