// Task
//
// Given a string str, reverse it and omit all non-alphabetic characters.
//     Example
//
// For str = "krishan", the output should be "nahsirk".
//
//     For str = "ultr53o?n", the output should be "nortlu".
//     Input/Output
//
//     [input] string str
//
// A string consists of lowercase latin letters, digits and symbols.
//
//     [output] a string
//

reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');

function reverseLetter(str) {
    return str.split('')
        .reverse()
        .filter(val => /[a-zA-Z]/.test(val))
        .join('');
}

function reverseLetter(str) {
    //coding and coding..
    return str.match(/[a-z]/ig).reverse().join('');
}

function reverseLetter(str) {
    return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
}

const reverseLetter = str => str.match(/[a-zA-Z]/g).reverse().join('');

function reverseLetter(str) {
    let arrNew = [];
    for ( let i = 0; i < str.length; i ++)  {
        if( 97 <= str[i].codePointAt(0) && str[i].codePointAt(0) <= 122 ) arrNew.push(str[i]);
    }
    return arrNew.reverse().join('');
}

function reverseLetter(str) {
    return str.replace(/[^a-z]/g, "").split("").reverse().join("");
}

function reverseLetter(str) {
    return str.split('').reverse().filter(function(el) {
        if('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(el) != -1) {
            return el;
        }
    }).join('');
}

const reverseLetter = (str, s = str.match(/[a-z]/g).reverse()) => s.join('');

function reverseLetter(str) {
    return str.match(/[a-z]/gi).reverse().join('')
}

function reverseLetter(str) {
    //coding and coding..
    return str.split('').filter(x => x.charCodeAt() > 96 && x.charCodeAt() < 123).reverse().join('');
}

function reverseLetter(str) {
    return [...str.replace(/[^a-z]/g, '')].reverse().join('');
}

const reverseLetter = str =>
    str.match(/[a-z]/gi).reverse().join(``);

const reverseLetter = (str) => [...str.replace(/[^a-z]/gi, '')].reverse().join('');

const reverseLetter = str => str.match(/[a-z]/gi).reverse().join('');

describe("Basic Tests", function(){
    it("It should works for basic tests.", function(){

        Test.assertEquals(reverseLetter("krishan"),"nahsirk")

        Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")

        Test.assertEquals(reverseLetter("ab23c"),"cba")

        Test.assertEquals(reverseLetter("krish21an"),"nahsirk")

    })})