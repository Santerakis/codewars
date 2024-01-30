// If you can't sleep, just count sheep!!
// Task:
//
//     Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
}

const countSheep = num => {
    let val = '';
    for (let i = 1; i <= num; i++) {
        val += `${i} sheep...`;
    }
    return val;
}

countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``

const countSheep = length =>
    Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

function countSheep (num) {
    const arr = [];
    for (i = 1; i <= num; i++) {
        arr.push(i + " sheep...");
    }
    return arr.join('');
}

var countSheep = function (num){
    let newStr = '', i = 0;
    while(i < num) {
        newStr += `${++i} sheep...`;
    }
    return newStr
}

var countSheep = function (n){
    return [...Array(n)].map((_,i)=>i+1+' sheep...').join``
}

describe("Fixed tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(countSheep(0), "");
        assert.strictEqual(countSheep(1), "1 sheep...");
        assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
        assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
    });
});