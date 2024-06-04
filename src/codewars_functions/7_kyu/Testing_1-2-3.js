// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//
// Write a function which takes a list of strings and returns each line prepended by the correct number.
//
//     The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//
//     Examples: (Input --> Output)
//
//     [] --> []
//     ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


var number = function(array) {
    return array.map(function (line, index) {
        return (index + 1) + ": " + line;
    });
}

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)

const number = array => array.map((n, i) => `${i + 1}: ${n}`);

var number = function(arr) {
    var newArr = [];
    if (arr.length === 0) {
        return [];
    } else {
        for (var i = 0, len = arr.length; i < len; i += 1) {
            newArr.push((i + 1) + ': ' + arr[i]);
        }
    }
    return newArr;
}

function number(arr) {
    return arr.map((e, i) => `${++i}: ${e}`);
}

const number = array =>
    array.map((val, idx) => `${idx + 1}: ${val}`);

function number(array) {
    return array.map(function(line, i) {
        return String(i + 1) + ": " + line
    })
}

var number = function(array) {
    return array.map((item, index) => `${index + 1}: ${item}`);
}

var number=function(array){
    if (array.length == 0) return [];

    for (let i=0; i<array.length; ++i)
        array[i] = (i+1) + ': ' + array[i];

    return array;
}

const number = array => array.map((c, i) => `${i+1}: ${c}`)

var number=function(array){
    return array.map(function(val,i) {
        return [++i,": ",val].join('');
    });
}

// equal 7 sec )))
var number = (arr) => arr.map((el,i) => `${i+1}: ` + el)


describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(number([]), [], 'Empty array should return empty array');
        assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');
    });
});
