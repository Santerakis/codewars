// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
//     The binary number returned should be a string.
//
//     Examples:(Input1, Input2 --> Output (explanation)))
//
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


function addBinary(a,b){
    return (a+b).toString(2)
}

const addBinary = (a, b) => (a + b).toString(2);

function addBinary(a,b) {
    var c = a + b;
    var res = '';
    while (c >= 1) {
        var res = c % 2 + res;
        c = Math.floor(c / 2);
    }
    return res;
}


function decimalToBinary(decimal){
    return (decimal >>> 0).toString(2);
}

function addBinary(a,b) {
    return decimalToBinary(a+b);
}


function addBinary(a,b){
    return Number(a + b).toString(2);
}

const addBinary = (a, b) => Math.trunc(a + b).toString(2)

function addBinary(a,b){
    if (a.isIntiger&& b.isIntiger){ //if all argument is intiger digits
        return (a+b).toSting(2); //ok , return a string
    } else {
        return (parseInt(a,10)+parseInt(b,10)).toString(2); //if some of argument send as a string - parse values to 10 digits int. values and return as a binary
    }
}

function addBinary(a,b){
    var sum = a + b, binary = '';

    while (sum > 0) {
        binary = (sum % 2) + binary;
        sum = Math.floor(sum / 2);
    }

    return binary;
}

function addBinary(a,b){
    var added = a + b;
    var binary =  added.toString(2);
    return binary;
}

function addBinary(a,b){
    let c = a + b;
    return c.toString(2);
}

function addBinary(a,b) {
    // validate input
    if (typeof(a) !== 'number' || typeof(b) !== 'number') throw new Error('addBinary: invalid non-numeric input parameters!');
    return ((a+b) >>> 0).toString(2);
}

const addBinary = (...args) => args.reduce((a, b) => a + b).toString(2)
addBinary(1,2)

function addBinary(a,b){
    var sum = a + b;
    var binary = [];
    var x = 0, y = 0;
    y = sum;
    while (y > 1) {
        x = y % 2;
        y = Math.floor(y / 2);
        binary.push(x);
    };
    binary.push(y);
    return binary.reverse().join("");
}

function addBinary(a,b) {
    let sum = a + b;
    return sum.toString(2)
}


describe("addBinary(1,2)", function() {
    var results1 = addBinary(1,2);
    it("Should return something that isn't falsy", function() {
        Test.expect(results1, "Something is wrong, no results!");
    });
    it("Should return \"11\"", function() {
        Test.assertEquals(results1, "11");
    });
});