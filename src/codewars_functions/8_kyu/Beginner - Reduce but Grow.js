// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow=x=> x.reduce((a,b) => a*b);

const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
        res *= x[i];
    }
    return res;
};

const grow = (nums) => nums.reduce((product, num) => product * num, 1);

function grow(x){
    return x.reduce((a, b)=> a * b,1);
}

const grow=x=>eval(x.join("*"))

function grow(x){
    return x.reduce((accumulator, currentVal) => accumulator *= currentVal, 1);
}

function grow(x){return x.reduce((a,b)=>a*b)};

let grow = x => x.reduce( (sum,el) => sum * el )

function grow(x){
    let counter = x[0]
    for(let i=1; i<x.length; i++){
        counter = counter * x[i]
    }
    return counter
}

function grow(x){
    let counter = x[0]
    for(let i=1; i<x.length; i++){
        counter = counter * x[i]
    }
    return counter
}

grow = x => x.reduce((prev,curr) => prev * curr)

const grow = x =>
    x.reduce((pre, val) => pre * val);

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(grow([1, 2, 3]), 6);
        assert.strictEqual(grow([4, 1, 1, 1, 4]), 16);
        assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64);
    });
})

