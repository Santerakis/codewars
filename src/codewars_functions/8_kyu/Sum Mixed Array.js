// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.

function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
}

function sumMix(x){
    let result = 0;
    for (let n of x) {
        result += parseInt(n);
    }
    return result;
}

const sumMix=x=>x.reduce((a,b)=>+b+a,0)

function sumMix(x){
    var somme = 0;
    for (i = 0; i<x.length; i++) {
        somme += Number(x[i]);
    }
    return somme;
}

const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);

function sumMix(x){
    return x.reduce((s,x)=>s+ +x,0);
}

function sumMix(x) {
    return x.reduce((s, n) => s + Number(n), 0)
}

const sumMix = x => x.reduce((pre, val) => pre + +val, 0);

function sumMix(x){
    return eval( x.join("+") )
}

describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {
        assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
        assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
        assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
    })
});