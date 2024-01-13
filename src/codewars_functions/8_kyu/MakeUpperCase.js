// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {return str.toUpperCase();}

function makeUpperCase(str) {
    return str.toLocaleUpperCase();
}

function makeUpperCase(str) {
    // Code here
    var res = str.toUpperCase();
    return res;
}

const makeUpperCase = Function.prototype.call.bind(String.prototype.toUpperCase);

makeUpperCase = s => s.toUpperCase();

function makeUpperCase(str) {
    return str.split('').map(el => el.toUpperCase()).join('')
}

describe("Basic Tests", function(){
    it("should pass the basic tests", function(){
        assert.strictEqual(makeUpperCase(""),           "");
        assert.strictEqual(makeUpperCase("hello"), "HELLO");
        assert.strictEqual(makeUpperCase("Hello"), "HELLO");
        assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
    });
});