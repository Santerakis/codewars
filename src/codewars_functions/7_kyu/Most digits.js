// Find the number with the most digits.
//
//     If two numbers in the argument array have the same number of digits, return the first one in the array.

const findLongest = l => l
    .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);

function findLongest(array){
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}

function findLongest(array){
    let num = '0';
    for(let i=0; i<array.length; i++) {
        let string = array[i].toString();
        if(string.length > num.length) {
            num = string;
        }
    }
    return parseInt(num);
}

findLongest = arr => arr.sort((a,b) => (b+'').length - (a+'').length)[0]

function findLongest(arr){
    const l = arr.map(x => String(x).length)
    return arr[l.indexOf(Math.max(...l))]
}

function findLongest(arr){
    const l = arr.map(x => String(x).length)
    return arr[l.indexOf(Math.max(...l))]
}

const findLongest = array =>
    array.reduce((pre, val) => `${val}`.length > `${pre}`.length ? val : pre);

function findLongest(a) {
    return a[a.map(n => ~~Math.log10(n)).indexOf(Math.max(...a.map(n => ~~Math.log10(n))))];
}

function findLongest(a) {
    let m = Math.max(...a);
    for (let i = 0; i < a.length; i++) if (m.toString().length == a[i].toString().length ) return a[i];
}

with(Math){
    function findLongest(array){
        var max10=~~log10(max(...array))
        return array.find(x=>~~log10(x)==max10)
    }
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(findLongest([1, 10, 100]), 100)
        Test.assertEquals(findLongest([9000, 8, 800]), 9000)
        Test.assertEquals(findLongest([8, 900, 500]), 900)
    });
});
