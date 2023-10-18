// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    return str.split('').reverse().join('');
}

const solution = str => str.split('').reverse().join('');

const solution = s => [...s].reverse().join('')

function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}

function solution(str) {
    let splitString = str.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    return joinArray;
}

let solution = str => [...str].reverse().join('');

describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(solution('world'), 'dlrow');
        assert.strictEqual(solution('hello'), 'olleh');
        assert.strictEqual(solution(''), '');
        assert.strictEqual(solution('h'), 'h');
    });
});

