// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
//
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    return s.repeat(n);
}

repeatStr = (n, s) => s.repeat(n)

function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
        str+=s;
    return str;
}

const repeatStr = (n,s) => s.repeat(n) ;

function repeatStr(n, str)
{
    return str.repeat(n);
}

function repeatStr (n, s) {
    return n > 1 ? s + repeatStr(--n, s) : s;
}

function repeatStr (n, s) {
    String.prototype.repeat = function(n) {
        return (new Array(n + 1)).join(this);
    };
    return s.repeat(n);
}

function repeatStr (n, s) {
    var myString = '';
    while(n > 0) {
        myString += s;
        n--;
    }
    return myString;
}

const repeatStr = function (n, s) { return Array(n).join(s) + s}

let repeatStr = (n, s) => `${s.repeat(n)}`;

describe("Tests", function() {
    it ("Basic tests", function() {
        assert.strictEqual(repeatStr(3, "*"), "***");
        assert.strictEqual(repeatStr(5, "#"), "#####");
        assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
    });
});

