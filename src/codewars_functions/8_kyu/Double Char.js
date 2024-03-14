// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
//
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
//
// Good Luck!

const doubleChar = (str) => str.split("").map(c => c + c).join("");

function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++){
        word = word + str[i] + str[i];
    };
    return word;
};

function doubleChar(str) {
    return str.replace(/(.)/g, "$1$1")
}

function doubleChar(str) {
    return str.split("").map(function (c) {
        return c + c;
    }).join("");
}

function doubleChar(str) {
    return [...str].map(v=>v+v).join('');
}

const doubleChar = str => str.split('').map(v=>v+v).join('')

function doubleChar(str) {
    // Your code here

    // lets first declare our string
    var newString = "";

    // Iterate through the string adding the current character twice
    for(var current = 0; current < str.length; current++)
    {
        newString += str[current] + str[current];
    }
    // return our new string
    return newString
}

function doubleChar(str) {
    return str.replace(/./g, '$&$&');
}

const doubleChar = str => str.split('').map(el => el + el).join('')

function doubleChar(str) {
    let res = '';
    for (let i in str) {
        res += str[i].repeat(2);
    }
    return res;
}

function doubleChar(str) {
    return str.split('').map( x => x + x ).join('');
}

function doubleChar(str) {
    return str.split('').reduce((a, b) => { return a.concat(b+b); }, '');
}

const doubleChar = str =>
    str.replace(/./g, `$&$&`);

const doubleChar = str => [...str].map(i => i + i).join('')

describe("doubleChar", function() {
    it("works for some examples", function() {
        Test.assertEquals(doubleChar("abcd"), "aabbccdd");
        Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
        Test.assertEquals(doubleChar("1337"), "11333377");
        Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
        Test.assertEquals(doubleChar("123456"), "112233445566");
        Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
    });
});
