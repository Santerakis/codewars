// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
//     For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
//
// Note: The function accepts an integer and returns an integer.
//
//     Happy Coding!

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));

}

function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
}

function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

function squareDigits(num){
    var array = num.toString().split('').map( function(int) {
        var i = parseInt(int);
        return i * i;
    });

    return parseInt(array.join(""));
}

function squareDigits(num){
    let result = num
        .toString()
        .split("")
        .map( num => parseInt(num) )
        .map( num => num * num )
        .join("")

    return parseInt(result)
}

function squareDigits(num){
    return +String(num).split('').map(function(num){return +num * +num;}).join('');
}

function squareDigits(num){
    //may the code be with you
    var numS = num.toString();
    var output = "";
    for (var i = 0; i < numS.length; i++) {
        output += parseInt(numS[i]) * parseInt(numS[i]);
    }
    return parseInt(output);
}

const squareDigits = (num) => Number((num + '').split("").map(c => c *c).join(""));

function squareDigits(num){
    return +(num+'').split('').map(a=>a*a).join('');
}

function squareDigits(num){
    var numArray = num.toString(10).split('').map(Number);
    var powArray = numArray.map(function (n) { return n * n; });
    var powString = powArray.join('');

    return parseInt(powString, 10);
}

function squareDigits(num) {
    var str = String(num)
    var res = ''

    for (var i = 0; i < str.length; i++) {
        res += Math.pow(str.charCodeAt(i) - 48, 2)
    }

    return parseInt(res)
}

function squareDigits(num){
    return parseInt(num.toString().split("").map(n => Math.pow(parseInt(n), 2)).join(""))
}

function squareDigits(num){
    //may the code be with you
    return +(num + "").replace(/\d/g, matched => matched * matched)
}

function squareDigits(num){
    return Number(num.toString().split('').map(x=>x*x).join(''))
}

describe("Basic tests", () => {

    it("squareDigits(3212) should equal 9414", () => {
        assert.strictEqual(squareDigits(3212), 9414);
    });

    it("squareDigits(2112) should equal 4114", () => {
        assert.strictEqual(squareDigits(2112), 4114);
    });

    it("squareDigits(0) should equal 0", () => {
        assert.strictEqual(squareDigits(0), 0);
    });
})
