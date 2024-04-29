// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
//     Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

function XO(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
        if(str[i].toLowerCase() == 'x') sum++;
        if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
}

function XO(str) {
    let countX = countStr(str, 'x');
    let countO = countStr(str, 'o');
    return countX === countO;
}

function countStr(s, match) {
    let regex = new RegExp(match, "gi");
    return (s.match(regex) || []).length;
}

function XO(str) {
    return str.replace(/o/ig, '').length == str.replace(/x/ig, '').length
}

function XO(str) {
    var z = str.toLowerCase();
    var x = z.split("x").length;
    var o = z.split("o").length;
    return x == o;
}

function XO(str) {
    return str=str.toLowerCase(), str.split("o").length == str.split("x").length
}

const XO = str => (str.match(/x/gi) || []).length == (str.match(/o/gi) || []).length;

function XO(str) {
    str = str.toLowerCase();
    return (str.match(/o/g) || []).length === (str.match(/x/g) || []).length;
}

XO = s => (s += 'xo').match(/x/gi).length === s.match(/o/gi).length;

var XO=s=>![...s].reduce((t,v)=>t+((v=(v.charCodeAt()-24)%32)?v-23?0:-1:1),0)

function XO(str) {
    var arr = [...str];

    return count(arr, 'x') === count(arr, 'o');
}

function count(arr, character) {
    return arr.filter(m => m.toLowerCase() === character).length;
}

function XO(str) {
    return (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;
}

const XO = str => str.match(/x/ig)?.length === str.match(/o/ig)?.length

XO = (str) => !(str.split(/[oO]/).length - str.split(/[xX]/).length);

const XO = str => str
    .toLowerCase()
    .split('')
    .reduce((acc, char) => (acc + ({x: 1, o: -1}[char] || 0)), 0) === 0

function XO(str) {
    let xo = 0
    for (const char of str.toLowerCase()) {
        char == 'x' && xo++
        char == 'o' && xo--
    }
    return !xo
}

const XO = str =>
    !str || !/^(?:x+|o+)$/i.test(str) && XO(str.replace(/[^ox]|xo|ox/gi, ''));

const XO = str => str.toLowerCase().split('').reduce((p, c) => [p[0] + (c == 'o'), p[1] + (c == 'x')], [0, 0]).reduce((o, x) => o == x);


describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(XO('xo'),true);
        Test.assertEquals(XO("xxOo"),true);
        Test.assertEquals(XO("xxxm"),false);
        Test.assertEquals(XO("Oo"),false);
        Test.assertEquals(XO("ooom"),false);
    });
});
