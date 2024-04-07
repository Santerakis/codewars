// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//     Examples:
//
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}

function descendingOrder(n){
    return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}

function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
}

function descendingOrder(n) {
    return parseInt(n.toString().split("").sort().reverse().join(""));
}

function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''));
}

function descendingOrder(n) {
    return n.digits().sort().reverse().undigits();
}

Number.prototype.digits = function() {
    const result = [];
    let n = this;
    do {
        result.unshift(n % 10);
        n = Math.floor(n / 10);
    } while(n);
    return result;
};

Array.prototype.undigits = function() {
    return this.reduce((n, d) => n * 10 + d, 0);
};

function descendingOrder(n){
    return +(n+'').split('').sort().reverse().join('')
}

function descendingOrder(n){
    return parseInt(n.toString().split('').sort(function(a, b){
        return b - a;
    }).join(''));
}

function descendingOrder(n){

    n = [...n.toString()];

    return Number(
        n
            .sort()
            .reverse()
            .join('')
    );
}

function descendingOrder(n){
    return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}

function descendingOrder(n){
    return +n.toString().split('').sort((a,b)=>b-a).join('');
}

// I use parseInt() What are you using?
const descendingOrder = (n, arr = [...String(n)]) => parseInt( arr.sort((a, b)=> b - a).join('') );

function descendingOrder(n){
    return Number(n.toString().split('').sort().reverse().join(''))
}

const descendingOrder = n =>
    +[...`${n}`].sort().reverse().join(``);

function descendingOrder(n){
    if(Number.isInteger(n) && n >= 0){
        return parseInt(n.toString()
            .split('')
            .sort()
            .reverse()
            .join(''));
    }else{
        return "Argument is negative or not integer";
    }
}

function descendingOrder(n){
    return parseInt(n.toString(10).split('').sort(function(a, b){
        return b - a;
    }).join(''));
}

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(descendingOrder(0), 0)
        assert.strictEqual(descendingOrder(1), 1)
        assert.strictEqual(descendingOrder(111), 111)
        assert.strictEqual(descendingOrder(15), 51)
        assert.strictEqual(descendingOrder(1021), 2110)
        assert.strictEqual(descendingOrder(123456789), 987654321)
    })
})