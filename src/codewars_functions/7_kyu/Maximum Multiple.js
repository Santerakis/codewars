// Task
//
// Given a Divisor and a Bound , Find the largest integer N , Such That ,
//     Conditions :
//
// N is divisible by divisor
//
// N is less than or equal to bound
//
// N is greater than 0.


function maxMultiple(divisor, bound){
    return bound-bound%divisor
}

const maxMultiple = (divisor,bound) => bound - bound % divisor ;

function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
}

function maxMultiple(divisor, bound) {
    while (bound % divisor) {
        bound--;
    }
    return bound;
}

function maxMultiple(divisor, bound){
    var max = 0;
    for(let j = divisor; j <= bound; j++) {
        if(j % divisor == 0 && j > max) {
            max = j;
        }
    }
    return max;
}

function maxMultiple(divisor, bound){
    return bound - (bound % divisor)
} // dupa

const maxMultiple = (d, b) => (b/d-b/d%1)*d;

const maxMultiple = (divisor, bound, out = bound % divisor) => bound - out

const maxMultiple = (divisor, bound) => Math.floor(bound / divisor) * divisor;

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(maxMultiple(2,7),6);
        assert.strictEqual(maxMultiple(3,10),9);
        assert.strictEqual(maxMultiple(7,17),14);
        assert.strictEqual(maxMultiple(10,50),50);
        assert.strictEqual(maxMultiple(37,200),185);
        assert.strictEqual(maxMultiple(7,100),98);
    });
})
