// Your task is to write a function which returns the sum of a sequence of integers.
//
//     The sequence is defined by 3 non-negative values: begin, end, step.
//
//     If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
//
// Examples
//
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)


const sequenceSum = (begin, end, step) => {
    var sum = 0;
    for(var i=begin;i<=end;i+=step)
    {
        sum += i;
    }
    return sum;
};

const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
};

function sequenceSum(begin, end, step) {
    let sum = 0
    for (let i = begin; i <= end; i += step) {
        sum += i
    }
    return sum
}

sequenceSum = (b, e, s) =>  b > e ? 0 : b + sequenceSum(b + s, e, s);

const sequenceSum = (begin, end, step) => {
    if (begin > end)
        return 0;
    const n = Math.floor((end - begin) / step) + 1;
    return (2 * begin + step * (n - 1)) * n / 2;
};

const sequenceSum = (begin, end, step) => {
    let n = Math.floor((end - begin) / step + 1);
    return n <= 0 ? 0 : n * (begin + (begin + (n - 1) * step)) / 2;
};

const sequenceSum = (begin, end, step) => {
    return begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
};

const sequenceSum = (begin, end, step) => {
    let result = 0;
    for (let i = begin; i <= end; i+=step) {
        result += i;
    }
    return result;
};

const sequenceSum = (a, b, c) => (
    k => (k + 1) * (2*a + c*k) / 2
)(a > b ? -1 : (b - a) / c | 0);

function sequenceSum( $, $2, stp){
    let out = 0;
    for (let i = $; i <= $2; i += stp){
        if ( i <= $2 ) out += i;
    }
    return out;
}

const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for(let i = begin; i <= end; i += step) sum += i;
    return sum;
};

const sequenceSum = (begin, end, step) => {
    if((begin<end && step<=0) || (begin>end && step>=0)) return 0;
    var n = Math.floor((end - begin + step)/step);
    return n*(2*begin + (n - 1)*step)/2;
};

sequenceSum = (begin, end, step) =>  begin > end ? 0 : begin + sequenceSum(begin + step, end, step)

const sequenceSum = (begin, end, step) => begin > end ? 0 : begin + sequenceSum(begin + step, end, step);

const sequenceSum = (begin, end, step) => {
    // May the Force be with you
    if(begin > end) return 0;
    for(let i = begin; i <= end; i+=step){
        return i + sequenceSum(begin+step,end,step)
    }
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(sequenceSum(2, 6, 2), 12)
        assert.strictEqual(sequenceSum(1, 5, 1), 15)
        assert.strictEqual(sequenceSum(1, 5, 3), 5)
    })
})