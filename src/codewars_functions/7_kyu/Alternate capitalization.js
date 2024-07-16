// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//
//     For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
//     The input will be a lowercase string with no spaces.
//
//     Good luck!


function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
};

function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};

function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
        [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}

function capitalize(s) {
    return s.split('').reduce((acc, val, i) => {
        acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
        acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
        return acc;
    }, ['', '']);
};

const capitalize = s => {
    return [
        s
            .split('')
            .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char)
            .join(''),
        s
            .split('')
            .map((char, index) => index % 2 !== 0 ? char.toUpperCase() : char)
            .join('')
    ]
};

describe("Basic tests", function(){
    Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
});