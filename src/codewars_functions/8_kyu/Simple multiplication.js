// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}

function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
}

function simpleMultiplication(value){

    if(value%2===0 ){
        return value *8
    }
    else{
        return value* 9;
    }
}

function simpleMultiplication(number){
    return (number % 2 == 0)? number * 8 : number * 9;
}

const simpleMultiplication=n=>n*(n%2?9:8)

function simpleMultiplication(number){
    return number%2 === 0 ? number * 8 : number * 9;
}

function simpleMultiplication(number) {
    if (typeof number === 'number') {
        return number * (8 + number % 2);
    } else {
        console.log(arguments.callee.name + ': Invalid argument');
    }
}

const simpleMultiplication = number => number%2 ? number * 9 : number * 8;

function simpleMultiplication(number){
    return number%2 ? number*9 : number*8
}

const simpleMultiplication = number =>
    (8 + number % 2) * number;

function simpleMultiplication(number){
    return number * (number % 2 ? 9 : 8)
}

const simpleMultiplication = number => number % 2 === 0 ? number * 8 : number * 9;

function simpleMultiplication(x){
    if (x % 2 === 0){
        return x*8;
    } else {
        return x*9;
    }
}

simpleMultiplication=n=>n%2?n*9:n*8;

function simpleMultiplication(number) {
    // your code........
    return number % 2 === 0 ? number * 8 : number * 9;
}

simpleMultiplication = x => x * (x % 2 ? 9 : 8);

describe("Basic Tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(simpleMultiplication(2),16,'Should return given argument times eight...')
        assert.strictEqual(simpleMultiplication(1),9, 'Should return given argument times nine...')
        assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
        assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
        assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')
    });
});