// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//     Examples
//
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
    }).join(' ');
}

function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}

function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            reversedWord = str[i] + reversedWord;
        } else {
            reversedStr += reversedWord + ' ';
            reversedWord = '';
        }
    }
    return reversedStr + reversedWord;
}

var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

function reverseWords(str) {
    return str.split(" ").map(x=>x.split("").reverse().join("")).join(" ");
}

function reverseWords(str) {
    return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}

function reverseWords(string){
    return string.split(' ').map(el => [...el].reverse().join('')).join(' ')
}

function reverseWords(str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr.split(" ").reverse().join(" ");
}

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

var reverseWords = (str) => str.split(" ").map(word => word.split('').reverse().join('')).join(" ")

function reverseWords(str) {
    return str.split(' ').map(a => a.split('').reverse().join('')).join(' ')
}

const reverseWords = str => str.split(' ').map(word => word.split('').reverse().join('')).join(' ');

function reverseWords(str) {
    return str.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
        assert.strictEqual(reverseWords('apple'), 'elppa');
        assert.strictEqual(reverseWords('a b c d'), 'a b c d');
        assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
    });
});
