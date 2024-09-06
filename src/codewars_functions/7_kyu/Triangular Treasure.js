// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
//
// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
// *         **
// *
//
// You need to return the nth triangular number. You should return 0 for out of range values:
//
//     For example: (Input --> Output)
//
// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0
//

function triangular( n ) {
    return n > 0 ? n * (n + 1) / 2 : 0;
}

// Return the nth triangular number
var max_n = Math.floor(Math.sqrt(Number.MAX_VALUE));

function triangular(n) {
    if (n < 1 || n >= max_n) return 0;
    return (n * (n + 1)) / 2;
}

// Return the nth triangular number
function triangular( n ) {
    return n < 0 ? 0 : n * (n + 1) / 2;
}

const triangular = n => n > 0 ? n*(n+1)/2 : 0;

// Return the nth triangular number
const triangular = (n) => (n>0)?(n * (n+1))*0.5:0;

function triangular(n) {
    return n > 0 ? Math.floor(n * (n + 1) / 2) : 0;
}

triangular=a=>a>0?a*++a/2:0

triangular = ( n ) => {
    return n > 0 ? n * (n + 1) / 2: 0
}

function triangular( n ) {
    return n < 0 ? 0 : (n ** 2 + n)/2;
}

function triangular(n) {
    return n>0? n*(1+n)/2:0
}

const triangular = (n) => (n>0) ? (n*(n+1))/2 : 0;

const triangular = n => n < 1 ? 0 : n * (n + 1) / 2;




describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual( triangular(2), 3 )
        assert.strictEqual( triangular(4), 10 )
        assert.strictEqual( triangular(-454), 0 )
    })
})
